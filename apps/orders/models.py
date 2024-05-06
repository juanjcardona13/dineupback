from django.db import models

from apps.core.models import AuditModel


class OrderStatus(AuditModel):
    name = models.CharField(max_length=100)

    class Meta:
        verbose_name_plural = "Order Status"
        permissions = (
            ('disable_status', 'Can disable status'),
            ('enable_status', 'Can enable status'),
        )
        
    
    def __str__(self):
        return self.name
    

class Order(AuditModel):

    table = models.ForeignKey('restaurant.Table', on_delete=models.CASCADE, related_name='orders')
    diner = models.ForeignKey('accounts.DineUpUser', on_delete=models.SET_NULL, related_name='orders', blank=True, null=True)
    status = models.ForeignKey(to="orders.OrderStatus", on_delete=models.SET_NULL, related_name="+", blank=True, null=True)
    number = models.IntegerField(default=1, blank=True, null=True)
    waiter = models.ForeignKey('accounts.Employee', on_delete=models.SET_NULL, related_name='orders', blank=True, null=True)
    total = models.DecimalField(max_digits=10, decimal_places=2, blank=True, null=True)
    restaurant = models.ForeignKey('restaurant.Restaurant', on_delete=models.CASCADE, related_name='orders', blank=True, null=True)


    class Meta:
        verbose_name_plural = "Orders"
        permissions = (
            ('disable_order', 'Can disable order'),
            ('enable_order', 'Can enable order'),
        )

    def save(self, *args, **kwargs):
        # Actualizar automáticamente el campo 'restaurant' basado en la mesa
        if self.table:
            self.restaurant = self.table.branch.restaurant
        super(Order, self).save(*args, **kwargs)

    def calculate_total(self):
        total = sum(item.price for item in self.items.all())
        return total

    def __str__(self):
        return f'Order {self.number} at table {self.table.identifier}'


class OrderItem(AuditModel):
    order = models.ForeignKey('Order', on_delete=models.CASCADE, related_name='order_items')
    menu_item = models.ForeignKey('menu.MenuItem', on_delete=models.SET_NULL, related_name='+', blank=True, null=True)
    variant_option = models.ForeignKey("menu.VariantOption", on_delete=models.CASCADE, related_name="+", blank=True, null=True)
    amount = models.IntegerField(default=1)
    diner_name = models.CharField(max_length=100, blank=True, null=True)
    observations = models.CharField(max_length=255, blank=True, null=True)
    price = models.DecimalField(max_digits=10, decimal_places=2, blank=True, null=True)  # Nuevo campo

    class Meta:
        verbose_name_plural = "Order Items"
        permissions = (
            ('disable_orderitem', 'Can disable order item'),
            ('enable_orderitem', 'Can enable order item'),
        )

    # def save(self, *args, **kwargs):
    #     if not self.pk:  # Nuevo OrderItem
    #         self.price = self.calculate_price()
    #     super().save(*args, **kwargs)

    # def calculate_price(self):
    #     item_price = self.menu_item.price
    #     if self.variant:
    #         item_price += self.variant.price
    #     options_price = sum(option.item_option.price * option.amount for option in self.customizable_options.all())
    #     total_price = (item_price + options_price) * self.amount
    #     return total_price

    def __str__(self):
        return f'Item {self.menu_item.name} of order {self.order.number}'


class OrderItemOption(AuditModel):
    order_item = models.ForeignKey('OrderItem', on_delete=models.CASCADE, related_name='order_item_options')
    item_option = models.ForeignKey("menu.ItemOption", on_delete=models.CASCADE, related_name="+")
    amount = models.IntegerField(default=1)


    class Meta:
        verbose_name_plural = "OrderItemOptions"
        permissions = (
            ('disable_orderitemoption', 'Can disable order item option'),
            ('enable_orderitemoption', 'Can enable order item option'),
        )
        

    def __str__(self):
        try:
            return f'Order Item Option  {self.customizable_option.name} of OrderItem {self.order_item.menu_item.name}'
        except:
            return str(self.pk)

from django.core.exceptions import ValidationError
from django.db import models
from apps.core.models import AuditModel, is_object_being_created
from django.contrib.contenttypes.fields import GenericRelation

# Create your models here.
class Menu(AuditModel):
    name = models.CharField(max_length=100, null=True, blank=True)
    restaurant = models.ForeignKey('restaurant.Restaurant', on_delete=models.CASCADE, related_name='menus', blank=True, null=True)
    restaurant_branches = models.ManyToManyField('restaurant.Branch', related_name='menus', blank=True)

    is_main = models.BooleanField(default=False)

    class Meta:
        verbose_name_plural = "Menus"
        permissions = (
            ('disable_menu', 'Can disable menu'),
            ('enable_menu', 'Can enable menu'),
        )

    def __str__(self):
        return self.name

    def clean(self) -> None:
        #TODO: Esto se de be de cambiar después, para que el usuario pueda cambiar cual es su principal
        # por ahora es siempre el primero creado
        if is_object_being_created(self):
            restaurant_menus = Menu.objects.filter(restaurant=self.restaurant)
            if not restaurant_menus.exists():
                self.is_main = True
            else:
                self.is_main = False
        else:
            restaurant_menus = self.__class__.objects.filter(restaurant=self.restaurant, is_main=True)
            if not restaurant_menus.exists():
                self.is_main = True
            else:
                self.is_main = self.__class__.objects.get(pk=self.pk).is_main
        return super().clean()


class Category(AuditModel):
    name = models.CharField(max_length=100)
    icon = models.CharField(max_length=100, null=True, blank=True)
    restaurant = models.ForeignKey('restaurant.Restaurant', on_delete=models.CASCADE, related_name='categories', blank=True, null=True)
    menus = models.ManyToManyField("menu.Menu", related_name='categories', blank=True)
    description = models.TextField(blank=True, null=True)
    # schedules = GenericRelation(to="core.ScheduleItem")
    position = models.IntegerField(default=1, blank=True, null=True, verbose_name="LA POSICIÓN")

    class Meta:
        verbose_name_plural = "Categories"
        permissions = (
            ('disable_category', 'Can disable category'),
            ('enable_category', 'Can enable category'),
        )

    def __str__(self):
        return self.name


class MenuItem(AuditModel):
    menu = models.ForeignKey('menu.Menu', on_delete=models.CASCADE, related_name='menu_items')
    name = models.CharField(max_length=100)
    description = models.TextField(blank=True, null=True)
    price = models.DecimalField(max_digits=7, decimal_places=2, blank=True, null=True)
    has_multiple_price = models.BooleanField(default=False)
    category = models.ForeignKey("menu.Category", related_name='menu_items', on_delete=models.CASCADE, blank=True, null=True)
    tags = models.ManyToManyField("menu.ItemTag", related_name='menu_items', blank=True)
    # schedules = GenericRelation(to="core.ScheduleItem")
    position = models.IntegerField(default=1, blank=True, null=True)

    class Meta:
        verbose_name_plural = "Menu Items"
        permissions = (
            ('disable_menuitem', 'Can disable menu item'),
            ('enable_menuitem', 'Can enable menu item'),
        )

    def __str__(self):
        return self.name


class MenuItemVariant(AuditModel):
    menu_item = models.OneToOneField("MenuItem", on_delete=models.CASCADE, related_name='variant')
    name = models.CharField(max_length=100)

    class Meta:
        verbose_name = "Menu Item Variant"
        verbose_name_plural = "Menu Item Variants"

        permissions = (
            ('disable_menuitemvariant', 'Can disable menu item variant'),
            ('enable_menuitemvariant', 'Can enable menu item variant'),
        )

    def __str__(self):
        return self.name


class VariantOption(AuditModel):
    variant = models.ForeignKey("MenuItemVariant", on_delete=models.CASCADE, related_name='variant_options')
    name = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    description = models.TextField(blank=True, null=True)
    is_default = models.BooleanField(default=False)
    position = models.IntegerField(default=1, blank=True, null=True)

    class Meta:
        verbose_name = "Variant Option"
        verbose_name_plural = "Variant Options"
        permissions = (
            ('disable_variantoption', 'Can disable variant option'),
            ('enable_variantoption', 'Can enable variant option'),
        )

    def __str__(self):
        return self.name


class ItemImage(AuditModel):
    menu_item = models.ForeignKey("menu.MenuItem", on_delete=models.CASCADE, related_name='images', blank=True, null=True)
    image = models.ImageField(upload_to='media/menu_item_images/')
    position = models.IntegerField(default=1, blank=True, null=True)

    class Meta:
        verbose_name_plural = "Item Images"
        permissions = (
            ('disable_itemimage', 'Can disable item image'),
            ('enable_itemimage', 'Can enable item image'),
        )

    def __str__(self):
        return str(self.id)


class OptionGroup(AuditModel):
    class TypeItem(models.TextChoices):
        ADDITIONAL   = ("ADDITIONAL", "ADDITIONAL")
        OPTION = ("OPTION", "OPTION")

    menu_item = models.ForeignKey("menu.MenuItem", on_delete=models.CASCADE, related_name="option_groups", blank=True, null=True)
    menu_items = models.ManyToManyField("menu.MenuItem", related_name="option_groups_shared", blank=True)
    name = models.CharField(max_length=100)
    name_type = models.CharField(max_length=15, choices=TypeItem.choices, default=TypeItem.ADDITIONAL)
    is_required = models.BooleanField(default=False)
    is_multiple = models.BooleanField(default=False)
    minimum = models.IntegerField(blank=True, null=True)
    maximum = models.IntegerField(blank=True, null=True)
    position = models.IntegerField(default=1, blank=True, null=True)

    class Meta:
        verbose_name_plural = "Option Groups"
        permissions = (
            ('disable_optiongroup', 'Can disable option group'),
            ('enable_optiongroup', 'Can enable option group'),
        )

    def __str__(self):
        return self.name


class ItemOption(AuditModel):

    dependent_options = models.ManyToManyField('self', symmetrical=False, blank=True)
    group = models.ForeignKey("OptionGroup", on_delete=models.SET_NULL, related_name="item_options", blank=True, null=True)
    name = models.CharField(max_length=100)
    description = models.TextField(blank=True, null=True)
    price = models.DecimalField(max_digits=7, decimal_places=2)
    is_default = models.BooleanField(default=False)
    position = models.IntegerField(default=1, blank=True, null=True)

    class Meta:
        verbose_name_plural = "Item Options"
        permissions = (
            ('disable_itemoption', 'Can disable item option'),
            ('enable_itemoption', 'Can enable item option'),
        )

    def __str__(self):
        return self.name


class ItemTag(AuditModel):
    name = models.CharField(max_length=100)

    class Meta:
        verbose_name_plural = "Item Tags"
        permissions = (
            ('disable_itemtag', 'Can disable item tag'),
            ('enable_itemtag', 'Can enable item tag'),
        )

    def __str__(self):
        return self.name


# class MenuItemAvailability(AuditModel):
#     menu_item = models.ForeignKey('menu.MenuItem', on_delete=models.CASCADE, related_name='availability')
#     branch = models.ForeignKey('restaurant.Branch', on_delete=models.CASCADE, related_name='item_availability')
#     is_available = models.BooleanField(default=True)

#     class Meta:
#         unique_together = ('menu_item', 'branch')
#         verbose_name_plural = "Menu Item Availabilities"
#         permissions = (
#             ('disable_menuitemavailability', 'Can disable menu item availability'),
#             ('enable_menuitemavailability', 'Can enable menu item availability'),
#         )

#     def __str__(self):
#         return f"{self.menu_item.name} at {self.branch.name}"
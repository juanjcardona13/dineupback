from django.contrib import admin
from .models import *
from apps.core.admin import DEFAULT_AUDIT_FIELDS, DEFAULT_READ_ONLY_FIELDS
from apps.core.constants import ENABLE_DEFAULT_ADMIN
import nested_admin


if ENABLE_DEFAULT_ADMIN:
    # admin.site.register(Order)
    @admin.register(Order)
    class OrderAdmin(nested_admin.NestedModelAdmin):
        list_display = ["id", "created_at"] 

    admin.site.register(OrderStatus)
    admin.site.register(OrderItem)
    admin.site.register(OrderItemOption)

else:
    class OrderItemOptionInline(nested_admin.NestedTabularInline):
        model = OrderItemOption
        extra = 1
        # inlines = [MenuItemInline]
        readonly_fields = DEFAULT_READ_ONLY_FIELDS
        fieldsets = (
            (None, {'fields': (('customizable_option', 'amount', 'is_active', ),)}),
        )

    class OrderItemInline(nested_admin.NestedStackedInline):
        model = OrderItem
        extra = 1
        inlines = [OrderItemOptionInline]
        readonly_fields = DEFAULT_READ_ONLY_FIELDS
        fieldsets = (
            (None, {'fields': (('menu_item', 'amount', 'observations', 'is_active', ),)}),
        )

    class OrderInline(nested_admin.NestedStackedInline):
        model = Order
        extra = 1
        inlines = [OrderItemInline]
        readonly_fields = DEFAULT_READ_ONLY_FIELDS
        fieldsets = (
            (None, {'fields': (('diner', 'number', 'status', 'is_active', ),)}),
        )


    @admin.register(Order)
    class OrderAdmin(nested_admin.NestedModelAdmin):
        fieldsets = (
            (None, {'fields': ('table', 'number', 'is_active',)}),
            DEFAULT_AUDIT_FIELDS
        )
        inlines = [OrderInline]
        search_fields = ("number", "id")
        readonly_fields = DEFAULT_READ_ONLY_FIELDS

    @admin.register(OrderStatus)
    class OrderStatusAdmin(nested_admin.NestedModelAdmin):
        fieldsets = (
            (None, {'fields': ('name', 'is_active',)}),
            DEFAULT_AUDIT_FIELDS
        )
        readonly_fields = DEFAULT_READ_ONLY_FIELDS


    @admin.register(Order)
    class OrderAdmin(nested_admin.NestedModelAdmin):
        fieldsets = (
            (None, {'fields': ('order', 'diner', 'number', 'status', 'is_active',)}),
            DEFAULT_AUDIT_FIELDS
        )
        inlines = [OrderItemInline]
        readonly_fields = DEFAULT_READ_ONLY_FIELDS


    @admin.register(OrderItem)
    class OrderItemAdmin(nested_admin.NestedModelAdmin):
        fieldsets = (
            (None, {'fields': ('order', 'menu_item', 'amount', 'observations', 'is_active',)}),
            DEFAULT_AUDIT_FIELDS
        )
        inlines = [OrderItemOptionInline]
        readonly_fields = DEFAULT_READ_ONLY_FIELDS


    @admin.register(OrderItemOption)
    class OrderItemOptionAdmin(nested_admin.NestedModelAdmin):
        fieldsets = (
            (None, {'fields': ('order_item', 'customizable_option', 'amount', 'is_active',)}),
            DEFAULT_AUDIT_FIELDS
        )
        readonly_fields = DEFAULT_READ_ONLY_FIELDS

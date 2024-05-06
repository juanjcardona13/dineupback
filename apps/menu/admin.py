from django.contrib import admin
from .models import *
from apps.core.admin import DEFAULT_AUDIT_FIELDS, DEFAULT_READ_ONLY_FIELDS
from apps.core.constants import ENABLE_DEFAULT_ADMIN
import nested_admin



if ENABLE_DEFAULT_ADMIN:
    admin.site.register(Menu)
    admin.site.register(Category)
    admin.site.register(MenuItem)
    admin.site.register(MenuItemVariant)
    admin.site.register(VariantOption)
    admin.site.register(ItemImage)
    admin.site.register(OptionGroup)
    admin.site.register(ItemOption)
    admin.site.register(ItemTag)
else:
    class CategoryInline(nested_admin.NestedTabularInline):
        model = Category
        extra = 1
        # sortable_field_name = "position"
        # inlines = [BranchPhoneNumberInline, TableInline]
        fieldsets = (
            (None, {'fields': (('name', 'description', 'is_active', ),)}),
        )

    class ItemImageInline(nested_admin.NestedTabularInline):
        model = ItemImage
        extra = 1
        # sortable_field_name = "position"
        # inlines = [BranchPhoneNumberInline, TableInline]
        readonly_fields = DEFAULT_READ_ONLY_FIELDS
        fieldsets = (
            (None, {'fields': (('menu_item', 'image', 'is_active', ),)}),
        )

    class ItemOptionInline(nested_admin.NestedStackedInline):
        model = ItemOption
        extra = 1
        # sortable_field_name = "position"
        # inlines = [BranchPhoneNumberInline, TableInline]
        readonly_fields = DEFAULT_READ_ONLY_FIELDS
        fieldsets = (
            (None, {'fields': (('name', 'description', 'price', 'is_active', ),)}),
        )

    class MenuItemInline(nested_admin.NestedStackedInline):
        model = MenuItem
        extra = 1
        # sortable_field_name = "position"
        inlines = [ItemImageInline]
        readonly_fields = DEFAULT_READ_ONLY_FIELDS
        autocomplete_fields = ('category', 'customizable_options', 'tags')
        fieldsets = (
            (None, {
                'fields': (
                    ('name', 'price',), 
                    ('category', 'customizable_options', 'tags',), 
                    ('description',   'is_active')
                )
            }),
        )

    class MenuInline(nested_admin.NestedStackedInline):
        model = Menu
        extra = 1
        inlines = [MenuItemInline]
        readonly_fields = DEFAULT_READ_ONLY_FIELDS
        fieldsets = (
            (None, {'fields': (('name', 'restaurant_branch', 'is_active', ),)}),
        )


    @admin.register(Menu)
    class MenuAdmin(nested_admin.NestedModelAdmin):
        fieldsets = (
            (None, {'fields': ('name', 'restaurant_branch', 'is_active',)}),
            DEFAULT_AUDIT_FIELDS
        )
        inlines = [CategoryInline, MenuItemInline]
        readonly_fields = DEFAULT_READ_ONLY_FIELDS


    @admin.register(Category)
    class CategoryAdmin(nested_admin.NestedModelAdmin):
        fieldsets = (
            (None, {'fields': ('menu', 'name', 'description', 'is_active',)}),
            DEFAULT_AUDIT_FIELDS
        )
        search_fields = ("name", "id")
        readonly_fields = DEFAULT_READ_ONLY_FIELDS


    @admin.register(MenuItem)
    class MenuItemAdmin(nested_admin.NestedModelAdmin):
        fieldsets = (
            (None, {'fields': ('menu', 'name', 'description', 'price', 'category', 'customizable_options', 'tags', 'is_active',)}),
            DEFAULT_AUDIT_FIELDS
        )
        inlines = [ItemImageInline]
        readonly_fields = DEFAULT_READ_ONLY_FIELDS


    @admin.register(ItemImage)
    class ItemImageAdmin(nested_admin.NestedModelAdmin):
        fieldsets = (
            (None, {'fields': ('menu_item', 'image', 'is_active',)}),
            DEFAULT_AUDIT_FIELDS
        )
        readonly_fields = DEFAULT_READ_ONLY_FIELDS


    @admin.register(ItemOption)
    class ItemOptionAdmin(nested_admin.NestedModelAdmin):
        fieldsets = (
            (None, {'fields': ('name', 'descrption', 'price', 'is_active',)}),
            DEFAULT_AUDIT_FIELDS
        )
        search_fields = ("name", "id")
        readonly_fields = DEFAULT_READ_ONLY_FIELDS


    @admin.register(ItemTag)
    class ItemTagAdmin(nested_admin.NestedModelAdmin):
        fieldsets = (
            (None, {'fields': ('name', 'is_active',)}),
            DEFAULT_AUDIT_FIELDS
        )
        search_fields = ("name", "id")
        readonly_fields = DEFAULT_READ_ONLY_FIELDS

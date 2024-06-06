from django.contrib import admin

from .models import *
from apps.core.admin import DEFAULT_AUDIT_FIELDS, DEFAULT_READ_ONLY_FIELDS
from apps.core.constants import ENABLE_DEFAULT_ADMIN
from django.contrib import admin
import nested_admin

if ENABLE_DEFAULT_ADMIN:
    admin.site.register(Restaurant)
    admin.site.register(Branch)
    admin.site.register(BranchPhoneNumber)
    admin.site.register(Table)
    admin.site.register(SocialMediaPlatform)
    admin.site.register(SocialMedia)
else:
    class TableInline(nested_admin.NestedTabularInline):
        model = Table
        extra = 1
        readonly_fields = DEFAULT_READ_ONLY_FIELDS
        fieldsets = (
            (None, {'fields': (('number', 'location_description', 'status'),)}),
        )

    class BranchPhoneNumberInline(nested_admin.NestedTabularInline):
        model = BranchPhoneNumber
        extra = 1
        readonly_fields = DEFAULT_READ_ONLY_FIELDS
        fieldsets = (
            (None, {'fields': (('phone_number', 'is_active', ),)}),
        )
        # sortable_field_name = "position"

    class BranchInline(nested_admin.NestedStackedInline):
        model = Branch
        extra = 1
        # sortable_field_name = "position"
        inlines = [BranchPhoneNumberInline, TableInline]
        readonly_fields = DEFAULT_READ_ONLY_FIELDS
        fieldsets = (
            (None, {'fields': (('name', 'address', 'email', 'postal_code', 'slogan', 'website', 'admin', 'is_main', 'logo', 'is_active', ),)}),
        )


    @admin.register(Restaurant)
    class RestaurantAdmin(nested_admin.NestedModelAdmin):
        fieldsets = (
            (None, {'fields': (('name', 'owner'), ('is_active'))}),
            DEFAULT_AUDIT_FIELDS
        )
        readonly_fields = DEFAULT_READ_ONLY_FIELDS

        inlines = [BranchInline]


    @admin.register(Branch)
    class BranchAdmin(nested_admin.NestedModelAdmin):
        # from apps.menu.admin import MenuInline

        fieldsets = (
            (None, {'fields': ('restaurant', 'name', 'admin', 'address', 'is_main', 'email', 'website', 'logo', 'slogan', 'postal_code',)}),
            DEFAULT_AUDIT_FIELDS
        )
        readonly_fields = DEFAULT_READ_ONLY_FIELDS
        inlines = [BranchPhoneNumberInline, TableInline, ] # MenuInline


    @admin.register(BranchPhoneNumber)
    class BranchPhoneNumberAdmin(nested_admin.NestedModelAdmin):
        fieldsets = (
            (None, {'fields': ('branch', 'phone_number', 'is_active')}),
            DEFAULT_AUDIT_FIELDS
        )
        readonly_fields = DEFAULT_READ_ONLY_FIELDS


    @admin.register(Table)
    class TableAdmin(nested_admin.NestedModelAdmin):
        fieldsets = (
            (None, {'fields': ('branch', 'number', 'qr_code', 'capacity', 'location_description', 'status', 'is_active')}),
            DEFAULT_AUDIT_FIELDS
        )
        readonly_fields = DEFAULT_READ_ONLY_FIELDS


    @admin.register(SocialMediaPlatform)
    class SocialMediaPlatformAdmin(nested_admin.NestedModelAdmin):
        fieldsets = (
            (None, {'fields': ('name', 'logo', 'is_active')}),
            DEFAULT_AUDIT_FIELDS
        )
        readonly_fields = DEFAULT_READ_ONLY_FIELDS


    @admin.register(SocialMedia)
    class SocialMediaAdmin(nested_admin.NestedModelAdmin):
        fieldsets = (
            (None, {'fields': ('restaurant', 'socail_media_platform', 'name', 'url', 'is_active')}),
            DEFAULT_AUDIT_FIELDS
        )
        readonly_fields = DEFAULT_READ_ONLY_FIELDS




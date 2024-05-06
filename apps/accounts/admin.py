from django.contrib import admin
from apps.core.admin import DEFAULT_AUDIT_FIELDS, DEFAULT_READ_ONLY_FIELDS
from apps.core.constants import ENABLE_DEFAULT_ADMIN
from .models import *
from django.contrib.auth.models import User
from django.contrib.auth.admin import UserAdmin
from django.utils.translation import gettext, gettext_lazy as _
from django.contrib.auth.forms import (
    AdminPasswordChangeForm, UserChangeForm, UserCreationForm,
)



if ENABLE_DEFAULT_ADMIN:
    admin.site.register(DineUpUser)
    admin.site.register(Role)
    admin.site.register(Employee)
    admin.site.register(JobFunction)
else:

    class BaseInlineUser(admin.StackedInline):
        can_delete = False
        fk_name = 'user'
        readonly_fields = DEFAULT_READ_ONLY_FIELDS

    class BaseUserAdmin(UserAdmin):
        readonly_fields = ('last_login', 'date_joined')
        fieldsets = (
            (None, {'fields': (('username', 'password'),  ('first_name', 'last_name'), ('email'))}),
            (None, {'fields': (), 'classes': ('customuser-section',)}),
            (None, {'fields': (('last_login', 'date_joined'),)}),
            (_('Permissions'), { 'fields': ('is_active', 'is_staff', 'is_superuser', 'groups', 'user_permissions'), }),
        )

        class Media:
            js = ('js/admin_scripts.js',)   



    class DineUpUserInline(BaseInlineUser):
        can_delete = False
        fk_name = 'user'
        readonly_fields = DEFAULT_READ_ONLY_FIELDS


        model = DineUpUser
        verbose_name_plural = 'DineUpUser'

        fieldsets = (
            (None, {'fields': ('role', 'phone_number', 'is_active')}),
            DEFAULT_AUDIT_FIELDS
        )


    class DineUpUserAdmin(BaseUserAdmin):
        readonly_fields = ('last_login', 'date_joined')
        fieldsets = (
            (None, {'fields': (('username', 'password'),  ('first_name', 'last_name'), ('email'))}),
            (None, {'fields': (), 'classes': ('customuser-section',)}),
            (None, {'fields': (('last_login', 'date_joined'),)}),
            (_('Permissions'), { 'fields': ('is_active', 'is_staff', 'is_superuser', 'groups', 'user_permissions'), }),
        )

        class Media:
            js = ('js/admin_scripts.js',)   


        inlines = (DineUpUserInline,)

    class DineUpUserProxy(User):
        class Meta:
            proxy = True
            verbose_name = 'DineUp User'
            verbose_name_plural = 'DineUp Users'


    admin.site.register(DineUpUserProxy, DineUpUserAdmin)


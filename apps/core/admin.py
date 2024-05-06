from django.contrib import admin
from django.contrib.auth.models import Permission
import nested_admin
from .models import *
from .constants import ENABLE_DEFAULT_ADMIN

# Register your models here.
DEFAULT_READ_ONLY_FIELDS = [
    "created_at",
    "updated_at",
    "created_by",
    "updated_by",
]
DEFAULT_AUDIT_FIELDS = (
    "Audit Fields",
    {
        "fields": (
            ("created_at", "created_by"),
            ("updated_at", "updated_by"),
        )
    },
)

class DefaultModelAdmin(nested_admin.NestedModelAdmin):
    fieldsets = (
        (None, {'fields': ('is_active')}),
        DEFAULT_AUDIT_FIELDS
    )
    readonly_fields = DEFAULT_READ_ONLY_FIELDS


if ENABLE_DEFAULT_ADMIN:
    admin.site.register(TimeSlot)
    admin.site.register(Schedule)
    admin.site.register(ScheduleItem)
    admin.site.register(Permission)
else:
    pass



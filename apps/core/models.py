from django.db import models
from .middlewares import current_request
from django.contrib.contenttypes.fields import GenericForeignKey
from django.contrib.contenttypes.models import ContentType
import uuid

def is_object_being_created(obj):
    # Retorna True si el objeto no existe en la base de datos, es decir, se está creando
    return not obj.__class__.objects.filter(pk=obj.pk).exists()


class AuditModel(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False) #auto_created=True, primary_key=True, serialize=False
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    created_by = models.ForeignKey('auth.User', on_delete=models.CASCADE, related_name='%(class)s_created_by', blank=True, null=True)
    updated_by = models.ForeignKey('auth.User', on_delete=models.CASCADE, related_name='%(class)s_updated_by', blank=True, null=True)
    is_active = models.BooleanField(default=True)

    class Meta:
        abstract = True

    def clean(self) -> None:
        user = None
        if current_request() is not None:
            user = current_request().user
            if user.is_anonymous:
                user = None

        if is_object_being_created(self):
            # Creating a new record in the DB
            self.created_by = user
            self.is_active = True
        else:
            # Updating an existing record in the DB
            self.updated_by = user

        return super().clean()

    # def save(self, *args, **kwargs):
    #     self.full_clean()
    #     return super().save(*args, **kwargs)


class TimeSlot(AuditModel):
    start_time = models.TimeField()
    end_time = models.TimeField()

    class Meta:
        verbose_name_plural = "Time Slots"
        permissions = (
            ('disable_timeslot', 'Can disable time slot'),
            ('enable_timeslot', 'Can enable time slot'),
        )

    def __str__(self):
        return str(self.pk)


class Schedule(AuditModel):
    day_of_week = models.PositiveSmallIntegerField(choices=[(i, j) for i, j in enumerate(['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'], start=1)])
    time_slot = models.ForeignKey(TimeSlot, on_delete=models.CASCADE)

    class Meta:
        verbose_name_plural = "Schedules"
        permissions = (
            ('disable_schedule', 'Can disable schedule'),
            ('enable_schedule', 'Can enable schedule'),
        )

    def __str__(self):
        return str(self.pk)


class ScheduleItem(AuditModel):
    schedule = models.ForeignKey("Schedule", on_delete=models.CASCADE, related_name="+")
    content_type = models.ForeignKey(ContentType, on_delete=models.CASCADE)
    object_id = models.PositiveIntegerField()
    # content_object = GenericForeignKey('content_type', 'object_id')

    class Meta:
        verbose_name_plural = "Schedules Item"
        permissions = (
            ('disable_scheduleitem', 'Can disable schedule item'),
            ('enable_scheduleitem', 'Can enable schedule item'),
        )

    def __str__(self):
        return str(self.pk)

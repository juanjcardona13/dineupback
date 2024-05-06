from django.db import models

from apps.core.models import AuditModel


class DineUpUser(AuditModel):
    user = models.OneToOneField(to="auth.User", on_delete=models.CASCADE, blank=True, null=True)
    phone_number = models.CharField(max_length=15, blank=True, null=True)

    class Meta:
        verbose_name_plural = "Dine Up Users"
        permissions = (
            ('disable_dineupuser', 'Can disable dine up user'),
            ('enable_dineupuser', 'Can enable dine up user'),
        )

    def __str__(self):
        try:
            return self.user.username
        except:
            return str(self.pk)


class Role(AuditModel):
    restaurants = models.ManyToManyField("restaurant.Restaurant", related_name="roles") #los restaurantes deben de ser del mismo dueño
    name = models.CharField(max_length=50)
    permissions = models.ManyToManyField(to="auth.Permission", blank=True)
    is_default = models.BooleanField(default=False)

    class Meta:
        verbose_name_plural = "Roles"
        permissions = (
            ('disable_role', 'Can disable role'),
            ('enable_role', 'Can enable role'),
        )

    def __str__(self):
        return self.name
    

class Employee(AuditModel):
    dine_up_user = models.OneToOneField(to="accounts.DineUpUser", on_delete=models.CASCADE, related_name="employment")
    restaurants = models.ManyToManyField(to="restaurant.Restaurant", related_name="employees")
    leader = models.ForeignKey(to="self", blank=True, null=True, on_delete=models.CASCADE, related_name="team_members")
    # Campos adicionales del empleado, como salario, fecha de contratación, etc.

    class Meta:
        verbose_name_plural = "Employees"
        permissions = (
            ('disable_employee', 'Can disable employee'),
            ('enable_employee', 'Can enable employee'),
        )

    def __str__(self):
        return str(self.pk)
    

class JobFunction(AuditModel):
    employee = models.ForeignKey(to="accounts.Employee", on_delete=models.CASCADE, related_name="job_functions")
    branch = models.ForeignKey(to="restaurant.Branch", on_delete=models.CASCADE, related_name="job_functions")
    roles = models.ManyToManyField(to="accounts.Role", blank=True) # Debo de poner una función que valide que un rol no se pueda repetir, adicional el rol debe de ser del restaurante de la sucursal

    class Meta:
        unique_together = ('employee', 'branch')
        verbose_name_plural = "Job Functions"
        permissions = (
            ('disable_jobfunction', 'Can disable job function'),
            ('enable_jobfunction', 'Can enable job function'),
        )

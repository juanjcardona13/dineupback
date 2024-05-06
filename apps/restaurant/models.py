from django.db import models
from apps.core.models import AuditModel, is_object_being_created
from django.contrib.contenttypes.fields import GenericRelation
from django.core.exceptions import ValidationError
from slugify import slugify
from django.db.models import Q

class Restaurant(AuditModel):
    name = models.CharField(max_length=100)
    slug = models.SlugField(blank=True, null=True, unique=True)
    owner = models.ForeignKey(to="accounts.DineUpUser", on_delete=models.CASCADE, related_name="restaurants")
    logo = models.ImageField(upload_to='media/branch_logos/', blank=True, null=True)
    slogan = models.CharField(max_length=200, blank=True, null=True)
    is_main = models.BooleanField(default=False)
    
    email = models.EmailField(blank=True, null=True)
    phone_number = models.CharField(max_length=15, blank=True, null=True)
    website = models.URLField(blank=True, null=True)

    # nit? or identify?
    # hay que pensar un nombre mas generico que `Restaurant`, si uno quiere poner bares, discotecas o cosas asi?

    class Meta:
        verbose_name_plural = "Restaurants"
        permissions = (
            ('disable_restaurant', 'Can disable restaurant'),
            ('enable_restaurant', 'Can enable restaurant'),
        )

    def __str__(self):
        return self.name

    def clean(self, *args, **kwargs):
        if is_object_being_created(self):
            self.slug = slugify(self.name)
            restaurants_with_slug = Restaurant.objects.filter( Q(slug=self.slug) | Q(slug__icontains=f'{self.slug}-') )
            if restaurants_with_slug.count() > 0:
                if self.slug.endswith("-"):
                    self.slug = f'{self.slug}{restaurants_with_slug.count()}'
                else:
                    self.slug = f"{self.slug}-{restaurants_with_slug.count()}"
    
        return super().clean(*args, **kwargs)


class Branch(AuditModel):
    restaurant = models.ForeignKey(to="restaurant.Restaurant", on_delete=models.CASCADE, related_name="branches")
    name = models.CharField(max_length=100, null=True, blank=True)
    slug = models.SlugField(blank=True, null=True, unique=True)
    admin = models.ForeignKey(to="accounts.DineUpUser", on_delete=models.CASCADE, related_name="managed_branches", blank=True, null=True)
    address = models.CharField(max_length=250, blank=True, null=True)
    address_detail = models.TextField(blank=True, null=True)
    postal_code = models.CharField(max_length=20, blank=True, null=True)
    is_main = models.BooleanField(default=False)
    # schedules = GenericRelation(to="core.ScheduleItem")

    email = models.EmailField(blank=True, null=True)
    website = models.URLField(blank=True, null=True)

    # social_media = models.ManyToManyField(to="restaurant.SocialMedia")
    # coordinates = models.CharField(max_length=100, blank=True, null=True)
    # payment_methods = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        verbose_name_plural = "Branches"
        permissions = (
            ('disable_branch', 'Can disable branch'),
            ('enable_branch', 'Can enable branch'),
        )

    def __str__(self):
        return self.name

    def clean(self) -> None:
        if self.name is None:
            total_branch = self.restaurant.branches.all().count()
            self.name = f"Sucursal {total_branch+1} de {self.restaurant.name}"
        #TODO: Esto se de be de cambiar después, para que el usuario pueda cambiar cual es su principal
        # por ahora es siempre el primero creado

        if is_object_being_created(self):
            restaurant_branches = self.__class__.objects.filter(restaurant=self.restaurant)
            if not restaurant_branches.exists():
                self.is_main = True
            else:
                self.is_main = False
        else:
            restaurant_branches = self.__class__.objects.filter(restaurant=self.restaurant, is_main=True)
            if not restaurant_branches.exists():
                self.is_main = True
            else:
                self.is_main = self.__class__.objects.get(pk=self.pk).is_main
        
        if is_object_being_created(self):
            self.slug = slugify(self.name)
            branches_with_slug = Branch.objects.filter( Q(slug=self.slug) | Q(slug__icontains=f'{self.slug}-') )
            if branches_with_slug.count() > 0:
                if self.slug.endswith("-"):
                    self.slug = f'{self.slug}{branches_with_slug.count()}'
                else:
                    self.slug = f"{self.slug}-{branches_with_slug.count()}"

        return super().clean()


class BranchPhoneNumber(AuditModel):
    branch = models.ForeignKey('restaurant.Branch', on_delete=models.CASCADE, related_name='phone_numbers')
    phone_number = models.CharField(max_length=15)
    identifier = models.CharField(max_length=4, blank=True, null=True)


    def __str__(self):
        return self.phone_number

    class Meta:
        verbose_name_plural = "Branch Phone Numbers"
        permissions = (
            ('disable_branchphonenumber', 'Can disable branch phone number'),
            ('enable_branchphonenumber', 'Can enable branch phone number'),
        )


class Table(AuditModel):
    class TableStatus(models.TextChoices):
        OCCUPIED = ("OCCUPIED", "OCCUPIED")
        AVAILABLE = ("AVAILABLE", "AVAILABLE")
        RESERVED = ("RESERVED", "RESERVED")

    branch = models.ForeignKey('restaurant.Branch', on_delete=models.CASCADE, related_name='tables')
    identifier = models.CharField(max_length=4)
    capacity = models.IntegerField(blank=True, null=True)
    location_description = models.TextField(blank=True, null=True)
    status = models.CharField(max_length=20, choices=TableStatus.choices, default=TableStatus.AVAILABLE, blank=True, null=True)
    position = models.IntegerField(default=1, blank=True, null=True)

    def __str__(self):
        return f"Table {self.identifier} at {self.branch.name}"

    class Meta:
        verbose_name_plural = "Tables"
        permissions = (
            ('disable_table', 'Can disable table'),
            ('enable_table', 'Can enable table'),
        )


class SocialMediaPlatform(AuditModel):
    name = models.CharField(max_length=100)
    logo = models.URLField()

    class Meta:
        verbose_name_plural = "Social Media Platforms"
        permissions = (
            ('disable_socialmediaplatform', 'Can disable social media platform'),
            ('enable_socialmediaplatform', 'Can enable social media platform'),
        )

    def __str__(self):
        return self.name


class SocialMedia(AuditModel):
    restaurant = models.ForeignKey(to="restaurant.Restaurant", on_delete=models.CASCADE, related_name="socail_media")
    social_media_platform = models.ForeignKey(to='restaurant.SocialMediaPlatform', on_delete=models.SET_NULL, related_name="+", blank=True, null=True)
    name = models.CharField(max_length=100, blank=True, null=True)
    url = models.URLField()

    class Meta:
        verbose_name_plural = "Social Media"
        permissions = (
            ('disable_socialmedia', 'Can disable social media'),
            ('enable_socialmedia', 'Can enable social media'),
        )

    def __str__(self):
        return self.name

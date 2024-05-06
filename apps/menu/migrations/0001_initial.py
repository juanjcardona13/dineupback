# Generated by Django 3.2.18 on 2023-05-23 02:51

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('restaurant', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('is_active', models.BooleanField(default=True)),
                ('name', models.CharField(max_length=100)),
                ('icon', models.CharField(blank=True, max_length=100, null=True)),
                ('description', models.TextField(blank=True, null=True)),
                ('position', models.IntegerField(blank=True, default=1, null=True)),
                ('created_by', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='category_created_by', to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'verbose_name_plural': 'Categories',
                'permissions': (('disable_category', 'Can disable category'), ('enable_category', 'Can enable category')),
            },
        ),
        migrations.CreateModel(
            name='ItemTag',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('is_active', models.BooleanField(default=True)),
                ('name', models.CharField(max_length=100)),
                ('created_by', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='itemtag_created_by', to=settings.AUTH_USER_MODEL)),
                ('updated_by', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='itemtag_updated_by', to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'verbose_name_plural': 'Item Tags',
                'permissions': (('disable_itemtag', 'Can disable item tag'), ('enable_itemtag', 'Can enable item tag')),
            },
        ),
        migrations.CreateModel(
            name='Menu',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('is_active', models.BooleanField(default=True)),
                ('name', models.CharField(blank=True, max_length=100, null=True)),
                ('is_main', models.BooleanField(default=False)),
                ('created_by', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='menu_created_by', to=settings.AUTH_USER_MODEL)),
                ('restaurant', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='menus', to='restaurant.restaurant')),
                ('restaurant_branches', models.ManyToManyField(blank=True, related_name='menus', to='restaurant.Branch')),
                ('updated_by', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='menu_updated_by', to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'verbose_name_plural': 'Menus',
                'permissions': (('disable_menu', 'Can disable menu'), ('enable_menu', 'Can enable menu')),
            },
        ),
        migrations.CreateModel(
            name='MenuItem',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('is_active', models.BooleanField(default=True)),
                ('name', models.CharField(max_length=100)),
                ('description', models.TextField(blank=True, null=True)),
                ('price', models.DecimalField(blank=True, decimal_places=2, max_digits=7, null=True)),
                ('has_multiple_price', models.BooleanField(default=False)),
                ('position', models.IntegerField(blank=True, default=1, null=True)),
                ('category', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='items', to='menu.category')),
                ('created_by', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='menuitem_created_by', to=settings.AUTH_USER_MODEL)),
                ('menu', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='items', to='menu.menu')),
                ('tags', models.ManyToManyField(blank=True, related_name='items', to='menu.ItemTag')),
                ('updated_by', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='menuitem_updated_by', to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'verbose_name_plural': 'Menu Items',
                'permissions': (('disable_menuitem', 'Can disable menu item'), ('enable_menuitem', 'Can enable menu item')),
            },
        ),
        migrations.CreateModel(
            name='MenuItemVariant',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('is_active', models.BooleanField(default=True)),
                ('name', models.CharField(max_length=100)),
                ('created_by', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='menuitemvariant_created_by', to=settings.AUTH_USER_MODEL)),
                ('menu_item', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='variant', to='menu.menuitem')),
                ('updated_by', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='menuitemvariant_updated_by', to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'verbose_name': 'Menu Item Variant',
                'verbose_name_plural': 'Menu Item Variants',
                'permissions': (('disable_menuitemvariant', 'Can disable menu item variant'), ('enable_menuitemvariant', 'Can enable menu item variant')),
            },
        ),
        migrations.CreateModel(
            name='VariantOption',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('is_active', models.BooleanField(default=True)),
                ('name', models.CharField(max_length=100)),
                ('price', models.DecimalField(decimal_places=2, max_digits=10)),
                ('description', models.TextField(blank=True, null=True)),
                ('is_default', models.BooleanField(default=False)),
                ('position', models.IntegerField(blank=True, default=1, null=True)),
                ('created_by', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='variantoption_created_by', to=settings.AUTH_USER_MODEL)),
                ('updated_by', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='variantoption_updated_by', to=settings.AUTH_USER_MODEL)),
                ('variant', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='variant_options', to='menu.menuitemvariant')),
            ],
            options={
                'verbose_name': 'Variant Option',
                'verbose_name_plural': 'Variant Options',
                'permissions': (('disable_variantoption', 'Can disable variant option'), ('enable_variantoption', 'Can enable variant option')),
            },
        ),
        migrations.CreateModel(
            name='OptionGroup',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('is_active', models.BooleanField(default=True)),
                ('name', models.CharField(max_length=100)),
                ('name_type', models.CharField(choices=[('ADDITIONAL', 'ADDITIONAL'), ('OPTION', 'OPTION')], default='ADDITIONAL', max_length=15)),
                ('is_required', models.BooleanField(default=False)),
                ('is_unique', models.BooleanField(default=False)),
                ('minimum', models.IntegerField(blank=True, null=True)),
                ('maximum', models.IntegerField(blank=True, null=True)),
                ('position', models.IntegerField(blank=True, default=1, null=True)),
                ('created_by', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='optiongroup_created_by', to=settings.AUTH_USER_MODEL)),
                ('menu_item', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='option_groups', to='menu.menuitem')),
                ('menu_items', models.ManyToManyField(blank=True, related_name='option_groups_shared', to='menu.MenuItem')),
                ('updated_by', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='optiongroup_updated_by', to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'verbose_name_plural': 'Option Groups',
                'permissions': (('disable_optiongroup', 'Can disable option group'), ('enable_optiongroup', 'Can enable option group')),
            },
        ),
        migrations.CreateModel(
            name='ItemOption',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('is_active', models.BooleanField(default=True)),
                ('name', models.CharField(max_length=100)),
                ('description', models.TextField(blank=True, null=True)),
                ('price', models.DecimalField(decimal_places=2, max_digits=7)),
                ('is_default', models.BooleanField(default=False)),
                ('position', models.IntegerField(blank=True, default=1, null=True)),
                ('created_by', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='itemoption_created_by', to=settings.AUTH_USER_MODEL)),
                ('dependent_options', models.ManyToManyField(blank=True, to='menu.ItemOption')),
                ('group', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='item_options', to='menu.optiongroup')),
                ('updated_by', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='itemoption_updated_by', to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'verbose_name_plural': 'Item Options',
                'permissions': (('disable_itemoption', 'Can disable item option'), ('enable_itemoption', 'Can enable item option')),
            },
        ),
        migrations.CreateModel(
            name='ItemImage',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('is_active', models.BooleanField(default=True)),
                ('image', models.ImageField(upload_to='media/menu_item_images/')),
                ('position', models.IntegerField(blank=True, default=1, null=True)),
                ('created_by', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='itemimage_created_by', to=settings.AUTH_USER_MODEL)),
                ('menu_item', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='images', to='menu.menuitem')),
                ('updated_by', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='itemimage_updated_by', to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'verbose_name_plural': 'Item Images',
                'permissions': (('disable_itemimage', 'Can disable item image'), ('enable_itemimage', 'Can enable item image')),
            },
        ),
        migrations.AddField(
            model_name='category',
            name='menus',
            field=models.ManyToManyField(blank=True, related_name='categories', to='menu.Menu'),
        ),
        migrations.AddField(
            model_name='category',
            name='restaurant',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='categories', to='restaurant.restaurant'),
        ),
        migrations.AddField(
            model_name='category',
            name='updated_by',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='category_updated_by', to=settings.AUTH_USER_MODEL),
        ),
    ]
# Generated by Django 3.2.18 on 2023-07-07 02:05

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('menu', '0003_alter_menuitem_menu'),
    ]

    operations = [
        migrations.AlterField(
            model_name='menuitem',
            name='category',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='menu_items', to='menu.category'),
        ),
        migrations.AlterField(
            model_name='menuitem',
            name='tags',
            field=models.ManyToManyField(blank=True, related_name='menu_items', to='menu.ItemTag'),
        ),
    ]
# Generated by Django 3.2.18 on 2023-06-14 12:43

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('menu', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='optiongroup',
            old_name='is_unique',
            new_name='is_multiple',
        ),
    ]

# Generated by Django 3.2.18 on 2023-07-07 02:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('restaurant', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='branch',
            name='name',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
    ]

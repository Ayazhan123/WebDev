# Generated by Django 2.2 on 2022-04-29 04:27

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0005_product_likes'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='product',
            name='likes',
        ),
    ]

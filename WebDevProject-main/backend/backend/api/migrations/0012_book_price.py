# Generated by Django 2.2 on 2021-05-01 10:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0011_category_image'),
    ]

    operations = [
        migrations.AddField(
            model_name='book',
            name='price',
            field=models.FloatField(default=241.99),
            preserve_default=False,
        ),
    ]
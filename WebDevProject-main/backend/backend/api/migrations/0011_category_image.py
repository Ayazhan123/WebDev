# Generated by Django 2.2 on 2021-05-01 08:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0010_user'),
    ]

    operations = [
        migrations.AddField(
            model_name='category',
            name='image',
            field=models.CharField(max_length=300, null=True),
        ),
    ]

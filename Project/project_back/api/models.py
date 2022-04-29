from django.db import models
from django.contrib.auth.models import User


class Address(models.Model):
    street = models.CharField(max_length=255)
    suite = models.CharField(max_length=255)
    city = models.CharField(max_length=255)
    zipcode = models.CharField(max_length=255)


class Client(models.Model):
    user = models.OneToOneField(User, models.CASCADE)
    name = models.CharField(max_length=255)
    email = models.EmailField()
    phone = models.CharField(max_length=12)
    address = models.OneToOneField(Address, models.CASCADE, related_name='client')


class Manager(models.Model):
    user = models.OneToOneField(User, models.CASCADE)
    name = models.CharField(max_length=255)
    email = models.EmailField()
    salary = models.FloatField()


class Store(models.Model):
    user = models.OneToOneField(User, models.CASCADE)
    name = models.CharField(max_length=255)
    email = models.EmailField()
    salary = models.FloatField()
    manager = models.ForeignKey(Manager, on_delete=models.CASCADE, related_name='stores')


class Album(models.Model):
    name = models.CharField(max_length=255)
    description = models.CharField(max_length=255)
    price = models.FloatField()


class Demand(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    client = models.ForeignKey(Client, models.CASCADE, related_name='client_demands')
    store = models.ForeignKey(Store, models.CASCADE, related_name='store_demands')
    album = models.ForeignKey(Album, models.CASCADE, related_name='album_demands')
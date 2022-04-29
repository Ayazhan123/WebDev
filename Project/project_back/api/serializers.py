from rest_framework.serializers import ModelSerializer, HyperlinkedModelSerializer
from .models import *
from rest_framework import serializers
from django.contrib.auth.models import User

class UserSerializer(HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['url', 'username', 'email']


class AddressSerializer(HyperlinkedModelSerializer):
    class Meta:
        model = Address
        fields = '__all__'


class ClientSerializer(HyperlinkedModelSerializer):
    class Meta:
        model = Client
        fields = ('url', 'name', 'email', 'phone', 'address')

    def create(self, validated_data):
        user = User.objects.filter(email=validated_data['email'])
        if user:
            raise serializers.ValidationError("email'" +
                                              validated_data['email'])
        else:
            user_created = User.objects.create_user(username=validated_data['name'].split()[0],
                                                email=validated_data['email'],
                                                password='123456')
            return Client.objects.create(user=user_created, **validated_data)


class ManagerSerializer(HyperlinkedModelSerializer):
    class Meta:
        model = Manager
        fields = ('url', 'pk', 'name', 'email', 'salary')

    def create(self, validated_data):
        user = User.objects.filter(email=validated_data['email'])
        if user:
            raise serializers.ValidationError("email'" +
                                              validated_data['email'])
        else:
            user_created = User.objects.create_user(username=validated_data['name'].split()[0],
                                                email=validated_data['email'],
                                                password='123456')
            return Manager.objects.create(user=user_created, **validated_data)


class StoreSerializer(HyperlinkedModelSerializer):
    class Meta:
        model = Store
        fields = ('url', 'name', 'email', 'salary')

    def create(self, validated_data):
        user = User.objects.filter(email=validated_data['email'])
        if user:
            raise serializers.ValidationError("email" +
                                              validated_data['email'])
        else:
            manager = Manager.objects.get(email=self.context['request'].user.email)
            user_created = User.objects.create_user(username=validated_data['name'].split()[0],
                                                email=validated_data['email'],
                                                password='123456')
            return Store.objects.create(user=user_created, manager=manager, **validated_data)


class AlbumSerializer(HyperlinkedModelSerializer):
    class Meta:
        model = Album
        fields = ('url', 'pk', 'name', 'description', 'price')


class DemandSerializer(HyperlinkedModelSerializer):
    client = ClientSerializer()
    store = StoreSerializer()
    album = AlbumSerializer()
    class Meta:
        model = Demand
        fields = ('url', 'pk', 'created', 'client', 'store', 'album')


class ManagerStoreSerializer(HyperlinkedModelSerializer):
    stores = StoreSerializer(many=True, read_only=True)
    class Meta:
        model = Manager
        fields = ('url', 'name', 'store',)

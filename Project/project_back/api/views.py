from django.shortcuts import render
from rest_framework import status
from rest_framework.reverse import reverse
from rest_framework.response import Response
from rest_framework.generics import ListAPIView, ListCreateAPIView, RetrieveUpdateDestroyAPIView, GenericAPIView

from .models import *
from .serializers import *

from .permissions import *
from rest_framework import permissions

from rest_framework import filters
from django_filters import NumberFilter, DateTimeFilter, AllValuesFilter

from rest_framework.views import APIView


class ApiRoot(GenericAPIView):
    name = 'api-root'

    def get(self, request, *args, **kwargs):
        return Response({
            "user": reverse(UserList.name, request=request),
            "address": reverse(AddressList.name, request=request),
            "client": reverse(ClientList.name, request=request),
            "manager": reverse(ManagerList.name, request=request),
            "store": reverse(StoreList.name, request=request),
            "album": reverse(AlbumList.name, request=request),
            "demand": reverse(DemandList.name, request=request),
            "manager-stores": reverse(ManagerStoreList.name, request=request),
            "store-demands": reverse(StoreDemands.name, request=request),
        }, status=status.HTTP_200_OK)


class UserList(ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    name = "user-list"

    permission_classes = (permissions.IsAdminUser,)
    

class UserDetail(RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    name = "user-detail"

    permission_classes = (permissions.IsAdminUser,)


class AddressList(ListCreateAPIView):
    name = 'address-list'
    queryset = Address.objects.all()
    serializer_class = AddressSerializer

    permission_classes = (permissions.IsAuthenticated, AddressPermissions,)


class AddressDetail(RetrieveUpdateDestroyAPIView):
    name = 'address-detail'
    queryset = Address.objects.all()
    serializer_class = AddressSerializer

    permission_classes = (permissions.IsAuthenticated, AddressPermissions,)


class ClientList(ListCreateAPIView):
    name = 'client-list'
    queryset = Client.objects.all()
    serializer_class = ClientSerializer

    permission_classes = (permissions.IsAuthenticated, ClientPermissions,)


class ClientDetail(RetrieveUpdateDestroyAPIView):
    name = 'client-detail'
    queryset = Client.objects.all()
    serializer_class = ClientSerializer

    permission_classes = (permissions.IsAuthenticated, ClientPermissions,)


class ManagerList(ListCreateAPIView):
    name = 'manager-list'
    queryset = Manager.objects.all()
    serializer_class = ManagerSerializer

    permission_classes = (permissions.IsAuthenticated, IsAdminOrReadOnly, ManagerPermissions,)


class ManagerDetail(RetrieveUpdateDestroyAPIView):
    name = 'manager-detail'
    queryset = Manager.objects.all()
    serializer_class = ManagerSerializer

    permission_classes = (permissions.IsAuthenticated, IsAdminOrReadOnly, ManagerPermissions,)


class StoreList(ListCreateAPIView):
    name = 'store-list'
    queryset = Store.objects.all()
    serializer_class = StoreSerializer

    filter_fields = ('salary',) # filtra por salário
    search_fields = ('^name',) # busca funcionários cujo nome começa com a palavra pesquisada
    ordering_fields = ('name', 'salary',) # ordena por nome ou salário, crescente ou decrescente

    permission_classes = (permissions.IsAuthenticated, StorePermissions,)


class StoreDetail(RetrieveUpdateDestroyAPIView):
    name = 'store-detail'
    queryset = Store.objects.all()
    serializer_class = StoreSerializer

    permission_classes = (permissions.IsAuthenticated, StorePermissions,)


class AlbumList(ListCreateAPIView):
    name = 'album-list'
    queryset = Album.objects.all()
    serializer_class = AlbumSerializer

    filter_fields = ('price',) 
    search_fields = ('^name',) 
    ordering_fields = ('name', 'price',)

    permission_classes = (IsAdminOrReadOnly,)


class AlbumDetail(RetrieveUpdateDestroyAPIView):
    name = 'album-detail'
    queryset = Album.objects.all()
    serializer_class = AlbumSerializer

    permission_classes = (IsAdminOrReadOnly,)


class DemandList(ListCreateAPIView):
    name = 'demand-list'
    queryset = Demand.objects.all()
    serializer_class = DemandSerializer

    permission_classes = (permissions.IsAuthenticated, DemandListPermissions,)


class DemandDetail(RetrieveUpdateDestroyAPIView):
    name = 'demand-detail'
    queryset = Demand.objects.all()
    serializer_class = DemandSerializer

    permission_classes = (permissions.IsAuthenticated, DemandDetailPermissions,)


class ManagerStoreList(ListAPIView):
    queryset = Manager.objects.all()
    serializer_class = ManagerStoreSerializer
    name = 'manager-store-list'

    filter_fields = ('name',)
    search_fields = ('^name',)
    ordering_fields = ('name',)

    permission_classes = (IsAdmin,)


class StoreDemands(APIView):
    name = 'store-demands'

    permission_classes = (permissions.IsAuthenticated, IsManagerOrAdmin,)

    def get(self, request, format=None):
        stores = Store.objects.all()
        status_list = []
        
        for store in stores:
            store_status = {}
            store_demands = 0

            for demand in Demand.objects.filter(store=store.pk):
                store_demands += 1

            store_status['pk'] = store.pk
            store_status['name'] = store.name
            store_status['total_demands'] = store_demands
            
            status_list.append(store_status)
        
        return Response(status_list, status=status.HTTP_200_OK)


class ClientDemands(APIView):
    name = 'client-demands'
    permission_classes = (permissions.IsAuthenticated, IsManagerOrAdmin,)

    def get(self, request, format=None):
        clients = Client.objects.all()
        status_list = []
        
        for client in clients:
            client_status = {}
            client_demands = []

            for demand in Demand.objects.filter(client=client.pk):
                data = {}
                data['data_do_pedido'] = demand.created
                data['atendente'] = demand.store.name
                data['album'] = demand.album.name
                client_demands.append(data)


            client_status['pk'] = client.pk
            client_status['name'] = client.name
            client_status['total_de_pedidos'] = len(client_demands)
            client_status['pedidos'] = client_demands
            
            status_list.append(client_status)
        
        return Response(status_list, status=status.HTTP_200_OK)


class ClientDemandsDetail(APIView):
    name = 'client-demands-detail'
    permission_classes = (permissions.IsAuthenticated, IsManagerOrAdmin,)

    def get_object_by_pk(self, pk):
        try:
            return Client.objects.get(pk=pk)
        except Exception:
            return None

    def get(self, request, pk, format=None):
        client = self.get_object_by_pk(pk)
        if client:
            # import pdb; pdb.set_trace()
            demands = client.client_demands.all()
            client_demands = []
            response = {}

            for demand in demands:
                data = {}
                data['data_do_pedido'] = demand.created
                data['atendente'] = demand.store.name
                data['album'] = demand.album.name
                client_demands.append(data)

            response['cliente'] = client.name
            response['Contato'] = client.phone
            response['email'] = client.email
            response['total_de_pedidos'] = len(client_demands)
            response['pedidos'] = client_demands
                
            return Response(response, status=status.HTTP_200_OK)
        else:
            return Response(status=status.HTTP_404_NOT_FOUND)
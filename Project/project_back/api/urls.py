from django.urls import path, include
from .views import *
from rest_framework_simplejwt import views as jwt_views
from rest_framework_swagger.views import get_swagger_view

from rest_framework_jwt.views import obtain_jwt_token, refresh_jwt_token

schema_view = get_swagger_view(title='API')

urlpatterns = [
    path('', ApiRoot.as_view(), name=ApiRoot.name),

    path('user/', UserList.as_view(), name=UserList.name),
    path('user/<int:pk>', UserDetail.as_view(), name=UserDetail.name),

    path('address/', AddressList.as_view(), name=AddressList.name),
    path('address/<int:pk>', AddressDetail.as_view(), name=AddressDetail.name),
    path('client/', ClientList.as_view(), name=ClientList.name),
    path('client/<int:pk>', ClientDetail.as_view(), name=ClientDetail.name),
    path('manager/', ManagerList.as_view(), name=ManagerList.name),
    path('manager/<int:pk>', ManagerDetail.as_view(), name=ManagerDetail.name),
    path('store/', StoreList.as_view(), name=StoreList.name),
    path('store/<int:pk>', StoreDetail.as_view(), name=StoreDetail.name),
    path('album/', AlbumList.as_view(), name=AlbumList.name),
    path('album/<int:pk>', AlbumDetail.as_view(), name=AlbumDetail.name),
    path('demand/', DemandList.as_view(), name=DemandList.name),
    path('demand/<int:pk>', DemandDetail.as_view(), name=DemandDetail.name),
    
    path('manager-stores/', ManagerStoreList.as_view(), name=ManagerStoreList.name),
    path('store-demands/', StoreDemands.as_view(), name=StoreDemands.name),
    path('client-demands/', ClientDemands.as_view(), name=ClientDemands.name),
    path('client-demands/<int:pk>', ClientDemandsDetail.as_view(), name=ClientDemandsDetail.name),

    path('api-auth/', include('rest_framework.urls')),
    path('api/token/', jwt_views.TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),

    path('auth/login/', obtain_jwt_token),
    path('auth/refresh-token/', refresh_jwt_token),

    path('api-docs/', schema_view),

]
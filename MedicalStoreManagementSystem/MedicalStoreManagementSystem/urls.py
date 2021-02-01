from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from MedicalApp import views
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from MedicalApp.views import CompanyNameViewSet

router =routers.DefaultRouter()
router.register("company", views.CompanyViewSet, basename='company')
router.register("companybank", views.CompanyBankViewset, basename='companybank')


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('api/gettoken/', TokenObtainPairView.as_view(), name='gettoken'),
    path('api/refresh_token/', TokenRefreshView.as_view(), name='refresh_token'),
    path('api/companybyname/<str:name>', CompanyNameViewSet.as_view(), name='companybyname')

]

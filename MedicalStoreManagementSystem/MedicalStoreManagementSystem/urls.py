from django.contrib import admin
from django.conf.urls.static import static
from django.urls import path, include
from rest_framework import routers
from MedicalApp import views
from MedicalStoreManagementSystem import settings
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from MedicalApp.views import CompanyNameViewSet, MedicineByNameViewSet, CompanyOnlyViewSet

router =routers.DefaultRouter()
router.register("company", views.CompanyViewSet, basename='company')
router.register("companybank", views.CompanyBankViewset, basename='companybank')
router.register("medicine", views.MedicineViewSet, basename='medicine')

import os


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('api/gettoken/', TokenObtainPairView.as_view(), name='gettoken'),
    path('api/refresh_token/', TokenRefreshView.as_view(), name='refresh_token'),
    path('api/companybyname/<str:name>', CompanyNameViewSet.as_view(), name='companybyname'),
    path('api/medicinebyname/<str:name>',MedicineByNameViewSet.as_view(),name="medicinebyname"),
    path('api/companyonly/',CompanyOnlyViewSet.as_view(),name="companyonly"),
    path('api/employee_bankby_id/<str:employee_id>',views.EmployeeBankByEIDViewSet.as_view(),name="employee_bankby_id"),

]+static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)

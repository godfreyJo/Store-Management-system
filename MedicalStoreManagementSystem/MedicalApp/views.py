from django.shortcuts import render
from rest_framework import viewsets, generics
from rest_framework.generics import get_object_or_404, ListAPIView
from rest_framework.response import Response
from MedicalApp.models import Company, CompanyBank
from MedicalApp.serializers import CompanySerializer, CompanyBankSerializer, MedicalDetailsSerializer, MedicalDetailsSerializerSimple, \
    CompanyAccountSerializer, EmployeeBankSerializer, EmployeeSalarySerializer, CustomerSerializer, BillSerializer, BillDetailsSerializer,\
        CustomerRequestSerializer, MedicalDetailsSerializer, EmployeeSerializer, CompanySerializer
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.permissions import IsAuthenticated

# Create your views here.

class CompanyViewSet(viewsets.ViewSet):
    authentication_classes =[JWTAuthentication]
    permission_classes = [IsAuthenticated]

    def list(self, request):
        company=Company.objects.all()
        serializer=CompanySerializer(company, many=True, context={'request':request})
        response_dict={"error":False,"message":"All Company List Data", "data":serializer.data}
        return Response(response_dict)

    def create(self, request):
        try:
            serializer=CompanySerializer(data=request.data, context={'request':request})
            serializer.is_valid(raise_exception=True)
            serializer.save()
            dict_response={'error':False,'Message':"Company Data saved Successfully"}
        except:
            dict_response={'error': True, 'Message':'There was an error during saving company data'}
        return Response(dict_response)
    
    def retrieve(self, request, pk=None):
        queryset = Company.objects.all()
        company = get_object_or_404(queryset, pk=pk)
        serializer = CompanySerializer(company, context={"request": request})
        serializer_data = serializer.data
        # Accessing All the Medicine Details of Current Medicine ID
        company_bank_details = CompanyBank.objects.filter(company_id=serializer_data["id"])
        companybank_details_serializers = CompanyBankSerializer(company_bank_details, many=True)
        serializer_data["company_bank"] = companybank_details_serializers.data
        return Response({"error": False, "message": "Single Data Fetch", "data": serializer_data})


    def update(self, request, pk=None):
        try:
            queryset = Company.objects.all()
            company=get_object_or_404(queryset,pk=pk)
            serializer=CompanySerializer(company,data=request.data,context={'request':request})
            serializer.is_valid(raise_exception=True)
            serializer.save()
            dict_response={'error':False,'message':'Successfully updated Company Data'}
        except:
            dict_response={'error':True,'message':'Error During Updating Company Data'}      
        return Response(dict_response) 

class CompanyBankViewset(viewsets.ViewSet):
    authentication_classes =[JWTAuthentication]
    permission_classes = [IsAuthenticated]

    def create(self, request):
        try:
            serializer=CompanyBankSerializer(data=request.data, context={'request':request})
            serializer.is_valid(raise_exception=True)
            serializer.save()
            dict_response={'error':False,'Message':"Company Bank Data saved Successfully"}
        except:
            dict_response={'error': True, 'Message':'There was an error during saving company bank data'}
        return Response(dict_response)
    
    def list(self, request):
        companybank=CompanyBank.objects.all()
        serializer=CompanyBankSerializer(companybank,many=True,context={"request":request})
        response_dict={"error":False,"message":"All Company Bank List Data","data":serializer.data}
        return Response(response_dict)

    def retrieve(self, request, pk=None):
        queryset=CompanyBank.objects.all()
        companybank=get_object_or_404(queryset, pk=pk)
        serializer=CompanyBankSerializer(companybank, context={'request':request})     
        return Response({"error":False,"message":"single Data Fetch", "data":serializer.data})

    def update(self, request, pk=None):
        queryset=CompanyBank.objects.all()
        companybank=get_object_or_404(queryset, pk=pk)
        serializer=CompanyBankSerializer(companybank, data=request.data, context={'request':request})    
        serializer.is_valid()
        serializer.save() 
        return Response({"error":False,"message":"Data has been updated", "data":serializer.data})

class CompanyNameViewSet(generics.ListAPIView):
    serializer_class = CompanySerializer
    def get_queryset(self):
        name=self.kwargs['name']
        return Company.objects.filter(name=name)




        
    
company_list=CompanyViewSet.as_view({'get':'list'})
company_create=CompanyViewSet.as_view({'post':'create'})
company_update=CompanyViewSet.as_view({'pot':'update'})

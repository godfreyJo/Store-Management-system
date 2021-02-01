from django.contrib import admin
from MedicalApp.models import Company, CompanyAccount, CompanyBank, Customer, CustomerRequest, MedicalDetail, Medicine, Bill,\
     BillDetail, EmployeeBank, Employee, EmployeeSalary
   
                                

# Register your models here.
admin.site.register(Company)
admin.site.register(CompanyAccount)
admin.site.register(CompanyBank)
admin.site.register(Customer)
admin.site.register(CustomerRequest)
admin.site.register(MedicalDetail)
admin.site.register(Medicine)
admin.site.register(Bill)
admin.site.register(BillDetail)
admin.site.register(Employee)
admin.site.register(EmployeeBank)
admin.site.register(EmployeeSalary)


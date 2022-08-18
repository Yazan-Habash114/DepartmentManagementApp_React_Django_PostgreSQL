from django.urls import path
from EmployeeApp.views import *

urlpatterns = [
    path('departments/', departments_list),
    path('departments/<int:id>', department_methods),
    path('departments/create', create_department),
    path('employees/register', register_emp),
    path('employees/', employees_list)
]

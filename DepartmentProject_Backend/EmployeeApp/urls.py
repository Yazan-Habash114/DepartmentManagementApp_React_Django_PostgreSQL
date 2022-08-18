from django.urls import path
from EmployeeApp.views import *

urlpatterns = [
    # As @api_view(['method_name'])
    path('departments/create', create_department),

    # As APIView class

    # Department endpoints
    path('departments/', DepartmentList.as_view()),
    path('departments/<int:id>', DepartmentMethods.as_view()),

    # Employees endpoints
    path('employees/register', RegisterEmployee.as_view()),
    path('employees/', EmployeesList.as_view()),
    path('employees/<int:id>', EmployeeMethods.as_view())
]

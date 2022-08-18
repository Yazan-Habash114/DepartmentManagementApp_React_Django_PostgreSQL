from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from EmployeeApp.models import Department, Employee
from EmployeeApp.serializers import DepartmentSerializer, EmployeeSerializer

# Create your views here.

# Department endpoints
# Get all departments
@api_view(['GET'])
def departments_list(request):
    departments = Department.objects.all()
    serDepartments = DepartmentSerializer(departments, many=True)
    return Response(serDepartments.data)


# Create department
@api_view(['POST'])
def create_department(request):
    serializer = DepartmentSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response('New department added')
    return Response(serializer.errors)


# Multiple methods on signle department
@api_view(['GET', 'PUT', 'DELETE'])
def department(request, id):
    try:
        department = Department.objects.get(pk=id)
        if request.method == 'GET':
            departmentSer = DepartmentSerializer(department)
            return Response(departmentSer.data)
        
        elif request.method == 'PUT':
            departmentSer = DepartmentSerializer(department, data=request.data)
            if departmentSer.is_valid():
                departmentSer.save()
                return Response('Department updated successfully')
            return Response(departmentSer.errors, status=status.HTTP_400_BAD_REQUEST)

        
        elif request.method == 'DELETE':
            department.delete()
            return Response('Department deleted successfully')
    except Department.DoesNotExist:
        return Response('No department found', status=status.HTTP_404_NOT_FOUND)


# Employee endpoints
# Register a new employee
@api_view(['POST'])
def register_emp(request):
    serializer = EmployeeSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response('New employee registered')
    return Response(serializer.errors)


# Get all employees
@api_view(['GET'])
def employees_list(request):
    employees = Employee.objects.all()
    serEmployees = EmployeeSerializer(employees, many=True)
    return Response(serEmployees.data)
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
    ser_departments = DepartmentSerializer(departments, many=True)
    return Response(ser_departments.data)


# Create department
@api_view(['POST'])
def create_department(request):
    serializer = DepartmentSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response('New department added')
    return Response(serializer.errors)


# Multiple methods on single department
@api_view(['GET', 'PUT', 'DELETE'])
def department_methods(request, id):
    try:
        department = Department.objects.get(pk=id)
        if request.method == 'GET':
            department_ser = DepartmentSerializer(department)
            return Response(department_ser.data)
        
        elif request.method == 'PUT':
            department_ser = DepartmentSerializer(department, data=request.data)
            if department_ser.is_valid():
                department_ser.save()
                return Response('Department updated successfully')
            return Response(department_ser.errors, status=status.HTTP_400_BAD_REQUEST)

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
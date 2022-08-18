from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from EmployeeApp.models import Department, Employee
from EmployeeApp.serializers import DepartmentSerializer, EmployeeSerializer
from rest_framework.views import APIView


# Create department
@api_view(['POST'])
def create_department(request):
    serializer = DepartmentSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response('New department added')
    return Response(serializer.errors)


class DepartmentList(APIView):
    def get(self, request):
        departments = Department.objects.all()
        ser_departments = DepartmentSerializer(departments, many=True)
        return Response(ser_departments.data)


def get_department_by_id(department_id):
    try:
        department = Department.objects.get(pk=department_id)
        return department
    except Department.DoesNotExist:
        return Response('No department found', status=status.HTTP_404_NOT_FOUND)


class DepartmentMethods(APIView):
    def get(self, request, id):
        department = get_department_by_id(id)
        department_ser = DepartmentSerializer(department)
        return Response(department_ser.data)

    def put(self, request, id):
        department = Department.objects.get(pk=id)
        department_ser = DepartmentSerializer(department, data=request.data)
        if department_ser.is_valid():
            department_ser.save()
            return Response('Department updated successfully')
        return Response(department_ser.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, id):
        department = Department.objects.get(pk=id)
        department.delete()
        return Response('Department deleted successfully')


# Employee endpoints
class EmployeesList(APIView):
    def get(self, request):
        employees = Employee.objects.all()
        serEmployees = EmployeeSerializer(employees, many=True)
        return Response(serEmployees.data)


class RegisterEmployee(APIView):
    def post(self, request):
        serializer = EmployeeSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response('New employee registered')
        return Response(serializer.errors)


def get_employee_by_id(employee_id):
    try:
        employee = Employee.objects.get(pk=employee_id)
        return employee
    except Employee.DoesNotExist:
        return Response('No employee found, the employee is not registered', status=status.HTTP_404_NOT_FOUND)


class EmployeeMethods(APIView):
    def get(self, request, id):
        employee = get_employee_by_id(id)
        employee_ser = EmployeeSerializer(employee)
        return Response(employee_ser.data)

    def put(self, request, id):
        employee = Employee.objects.get(pk=id)
        employee_ser = EmployeeSerializer(employee, data=request.data)
        if employee_ser.is_valid():
            employee_ser.save()
            return Response('Employee updated successfully')
        return Response(employee_ser.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, id):
        employee = Employee.objects.get(pk=id)
        employee.delete()
        return Response('Employee deleted successfully')

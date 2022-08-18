from rest_framework import serializers
from EmployeeApp.models import Department, Employee


class DepartmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Department
        fields = ('departmentId', 'departmentName')
    
    def create(self, data):
        return Department.objects.create(**data)
    
    def update(self, instance, data):
        instance.departmentName = data.get('departmentName', instance.departmentName)
        instance.save()
        return instance


class EmployeeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employee
        fields = ('employeeId', 'employeeName', 'dateOfJoining', 'department')
    
    def create(self, data):
        return Employee.objects.create(**data)
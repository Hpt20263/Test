from rest_framework import serializers
from .models import Equation

class EquationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Equation
        fields = ['id', 'a', 'b', 'c', 'result', 'created_at', 'updated_at']
        read_only_fields = ['result', 'created_at', 'updated_at']

    def validate_a(self, value):
        """Validate that 'a' is not zero for quadratic equation"""
        if float(value) == 0:
            raise serializers.ValidationError("Hệ số 'a' không được bằng 0 trong phương trình bậc 2")
        return value
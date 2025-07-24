from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import Equation
from .serializers import EquationSerializer

class EquationViewSet(viewsets.ModelViewSet):
    queryset = Equation.objects.all()
    serializer_class = EquationSerializer

    @action(detail=False, methods=['post'])
    def calculate(self, request):
        """Endpoint để tính toán phương trình mà không lưu vào database"""
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            # Tạo instance tạm thời để tính toán
            temp_equation = Equation(
                a=serializer.validated_data['a'],
                b=serializer.validated_data['b'],
                c=serializer.validated_data['c']
            )
            result = temp_equation.solve()
            return Response({
                'a': temp_equation.a,
                'b': temp_equation.b,
                'c': temp_equation.c,
                'result': result
            })
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

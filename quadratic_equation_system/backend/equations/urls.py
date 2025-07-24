from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import EquationViewSet

router = DefaultRouter()
router.register(r'equations', EquationViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
]
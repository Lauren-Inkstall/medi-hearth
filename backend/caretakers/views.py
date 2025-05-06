from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from .models import Dependent, Alert
from .serializers import DependentSerializer, AlertSerializer

class DependentViewSet(viewsets.ModelViewSet):
    serializer_class = DependentSerializer
    permission_classes = [IsAuthenticated]
    def get_queryset(self):
        return Dependent.objects.filter(caretaker=self.request.user)
    def perform_create(self, serializer):
        serializer.save(caretaker=self.request.user)

class AlertViewSet(viewsets.ModelViewSet):
    serializer_class = AlertSerializer
    permission_classes = [IsAuthenticated]
    def get_queryset(self):
        user = self.request.user
        return Alert.objects.filter(caretaker=user)
    def perform_create(self, serializer):
        serializer.save(caretaker=self.request.user)
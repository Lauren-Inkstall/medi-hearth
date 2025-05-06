from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from .models import Appointment, DoctorNote, EmergencyCase
from .serializers import (
    AppointmentSerializer,
    DoctorNoteSerializer,
    EmergencyCaseSerializer,
)

class AppointmentViewSet(viewsets.ModelViewSet):
    serializer_class = AppointmentSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        # doctors see their appointments; patients see theirs
        if user.roles.filter(name='doctor').exists():
            return Appointment.objects.filter(doctor=user)
        return Appointment.objects.filter(patient=user)

    def perform_create(self, serializer):
        # doctor is always the creator
        serializer.save(doctor=self.request.user)

class DoctorNoteViewSet(viewsets.ModelViewSet):
    serializer_class = DoctorNoteSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        # doctors see notes they wrote; patients see notes about them
        if user.roles.filter(name='doctor').exists():
            return DoctorNote.objects.filter(doctor=user)
        return DoctorNote.objects.filter(patient=user)

    def perform_create(self, serializer):
        serializer.save(doctor=self.request.user)

class EmergencyCaseViewSet(viewsets.ModelViewSet):
    serializer_class = EmergencyCaseSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return EmergencyCase.objects.filter(patient=self.request.user)

    def perform_create(self, serializer):
        serializer.save(reported_by=self.request.user)
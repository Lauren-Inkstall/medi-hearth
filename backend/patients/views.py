from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from .models import MedicalHistory, Prescription, DailyCheckin, CareTeamInvite, EmergencyContact
from .serializers import (
    MedicalHistorySerializer,
    PrescriptionSerializer,
    DailyCheckinSerializer,
    CareTeamInviteSerializer,
    EmergencyContactSerializer,
)

class MedicalHistoryViewSet(viewsets.ModelViewSet):
    serializer_class = MedicalHistorySerializer
    permission_classes = [IsAuthenticated]
    def get_queryset(self):
        return MedicalHistory.objects.filter(patient=self.request.user)
    def perform_create(self, serializer):
        serializer.save(patient=self.request.user)

class PrescriptionViewSet(viewsets.ModelViewSet):
    serializer_class = PrescriptionSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        # doctors see prescriptions they wrote; patients see theirs
        if user.roles.filter(name='doctor').exists():
            return Prescription.objects.filter(doctor=user)
        return Prescription.objects.filter(patient=user)

    def perform_create(self, serializer):
        # doctor is always the creator
        serializer.save(doctor=self.request.user)

class DailyCheckinViewSet(viewsets.ModelViewSet):
    serializer_class = DailyCheckinSerializer
    permission_classes = [IsAuthenticated]
    def get_queryset(self): return DailyCheckin.objects.filter(patient=self.request.user)
    def perform_create(self, serializer): serializer.save(patient=self.request.user)

class CareTeamInviteViewSet(viewsets.ModelViewSet):
    serializer_class = CareTeamInviteSerializer
    permission_classes = [IsAuthenticated]
    def get_queryset(self): return CareTeamInvite.objects.filter(patient=self.request.user)
    def perform_create(self, serializer): serializer.save(patient=self.request.user)

class EmergencyContactViewSet(viewsets.ModelViewSet):
    serializer_class = EmergencyContactSerializer
    permission_classes = [IsAuthenticated]
    def get_queryset(self): return EmergencyContact.objects.filter(patient=self.request.user)
    def perform_create(self, serializer): serializer.save(patient=self.request.user)
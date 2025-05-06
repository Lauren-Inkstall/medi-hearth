from rest_framework import serializers
from .models import MedicalHistory, Prescription, MedicationItem, DailyCheckin, CareTeamInvite, EmergencyContact

class MedicalHistorySerializer(serializers.ModelSerializer):
    class Meta:
        model = MedicalHistory
        fields = '__all__'

class MedicationItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = MedicationItem
        fields = ('id', 'name', 'dosage', 'frequency', 'duration', 'instructions')

class PrescriptionSerializer(serializers.ModelSerializer):
    medications = MedicationItemSerializer(many=True)

    class Meta:
        model = Prescription
        fields = ('id', 'patient', 'doctor', 'prescribed_on', 'notes', 'medications')

    def create(self, validated_data):
        meds_data = validated_data.pop('medications')
        prescription = Prescription.objects.create(**validated_data)
        for med in meds_data:
            MedicationItem.objects.create(prescription=prescription, **med)
        return prescription

class DailyCheckinSerializer(serializers.ModelSerializer):
    class Meta:
        model = DailyCheckin
        fields = '__all__'

class CareTeamInviteSerializer(serializers.ModelSerializer):
    class Meta:
        model = CareTeamInvite
        fields = '__all__'

class EmergencyContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = EmergencyContact
        fields = '__all__'
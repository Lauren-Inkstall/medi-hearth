from django.db import models
from django.conf import settings

class MedicalHistory(models.Model):
    patient = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    description = models.TextField()
    date = models.DateField()
    attachments = models.FileField(upload_to='history/', blank=True, null=True)

    def __str__(self):
        return f"{self.title} ({self.date})"

class Prescription(models.Model):
    patient = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        related_name='prescriptions',
        on_delete=models.CASCADE
    )
    doctor = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        related_name='prescribed',
        on_delete=models.CASCADE
    )
    prescribed_on = models.DateField(auto_now_add=True)
    notes = models.TextField(blank=True)

    def __str__(self):
        return f"Prescription for {self.patient.username} on {self.prescribed_on}"

class MedicationItem(models.Model):
    prescription = models.ForeignKey(
        Prescription,
        related_name='medications',
        on_delete=models.CASCADE
    )
    name = models.CharField(max_length=200)
    dosage = models.CharField(max_length=100)
    frequency = models.CharField(max_length=100)
    duration = models.CharField(max_length=100)
    instructions = models.TextField(blank=True)

    def __str__(self):
        return f"{self.name} for {self.prescription.patient.username}"

class DailyCheckin(models.Model):
    patient = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    date = models.DateField(auto_now_add=True)
    mood = models.CharField(max_length=100)
    symptoms = models.TextField(blank=True)
    notes = models.TextField(blank=True)

    def __str__(self):
        return f"Check-in {self.date} for {self.patient.username}"

class CareTeamInvite(models.Model):
    patient = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        related_name='invites_sent',
        on_delete=models.CASCADE
    )
    invited_doctor = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        related_name='invites_received',
        on_delete=models.CASCADE
    )
    token = models.CharField(max_length=64)
    status = models.CharField(
        max_length=20,
        choices=[('pending','Pending'),('accepted','Accepted'),('declined','Declined')],
        default='pending'
    )

    def __str__(self):
        return f"Invite {self.token} - {self.status}"

class EmergencyContact(models.Model):
    patient = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    name = models.CharField(max_length=200)
    relation = models.CharField(max_length=100)
    phone = models.CharField(max_length=20)

    def __str__(self):
        return f"{self.name} ({self.relation})"
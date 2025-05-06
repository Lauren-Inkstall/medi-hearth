from django.db import models
from django.conf import settings
from users.models import CustomUser

# mirror frontend appointment types
APPOINTMENT_TYPE_CHOICES = [
    ('consultation', 'Consultation'),
    ('follow_up', 'Follow-up'),
    ('emergency', 'Emergency'),
]

class Appointment(models.Model):
    patient = models.ForeignKey(CustomUser, related_name='patient_appointments', on_delete=models.CASCADE)
    doctor = models.ForeignKey(CustomUser, related_name='doctor_appointments', on_delete=models.CASCADE)
    date_time = models.DateTimeField()
    # Provide a default and allow blank to avoid non-null issues on existing rows
    appointment_type = models.CharField(
        max_length=20,
        choices=APPOINTMENT_TYPE_CHOICES,
        default='consultation',  # default for existing records
        blank=False,
        null=False
    )
    duration = models.PositiveIntegerField(
        default=30,  # default duration in minutes for existing records
        help_text="Duration of the appointment in minutes"
    )
    notes = models.TextField(
        blank=True,
        default='',  # allow existing rows to have empty notes
        help_text="Optional notes about the appointment"
    )

    class Meta:
        ordering = ['-date_time']

    def __str__(self):
        return f"{self.appointment_type.capitalize()} on {self.date_time} for {self.patient}"

    def __str__(self):
        return f"Appointment on {self.datetime} ({self.appointment_type})"

class DoctorNote(models.Model):
    doctor = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        related_name='notes_written',
        on_delete=models.CASCADE
    )
    patient = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        related_name='notes_received',
        on_delete=models.CASCADE
    )
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Note by {self.doctor.username} on {self.created_at}"

class EmergencyCase(models.Model):
    patient = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        related_name='emergency_reports',
        on_delete=models.CASCADE
    )
    reported_by = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        related_name='emergency_reported',
        on_delete=models.CASCADE
    )
    description = models.TextField()
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"EmergencyCase for {self.patient.username} at {self.timestamp}"

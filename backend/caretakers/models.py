from django.db import models
from django.conf import settings

class Dependent(models.Model):
    caretaker = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        related_name='dependents',
        on_delete=models.CASCADE
    )
    patient = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        related_name='dependents_of',
        on_delete=models.CASCADE
    )

class Alert(models.Model):
    caretaker = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE
    )
    dependent = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        related_name='alerts',
        on_delete=models.CASCADE
    )
    message = models.TextField()
    is_resolved = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
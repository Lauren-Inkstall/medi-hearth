from django.db import models
from django.conf import settings

class Report(models.Model):
    owner = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        related_name='reports',
        on_delete=models.CASCADE
    )
    title = models.CharField(max_length=200)
    file = models.FileField(upload_to='reports/')
    created_at = models.DateTimeField(auto_now_add=True)
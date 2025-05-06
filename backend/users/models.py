from django.contrib.auth.models import AbstractUser
from django.db import models

# Define choices for gender and blood types for use in Profile
GENDER_CHOICES = [
    ('male', 'Male'),
    ('female', 'Female'),
    ('other', 'Other'),
]

BLOOD_TYPE_CHOICES = [
    ('A+', 'A+'), ('A-', 'A-'),
    ('B+', 'B+'), ('B-', 'B-'),
    ('AB+', 'AB+'), ('AB-', 'AB-'),
    ('O+', 'O+'), ('O-', 'O-'),
]

class Role(models.Model):
    ROLE_CHOICES = [
        ('patient', 'Patient'),
        ('doctor', 'Doctor'),
        ('caretaker', 'Caretaker'),
    ]
    name = models.CharField(max_length=10, choices=ROLE_CHOICES, unique=True)

    def __str__(self):
        return self.name

class CustomUser(AbstractUser):
    # users can have multiple roles
    roles = models.ManyToManyField(Role, blank=True)

class Profile(models.Model):
    user = models.OneToOneField(CustomUser, on_delete=models.CASCADE)
    photo = models.ImageField(upload_to='profiles/', blank=True, null=True)
    bio = models.TextField(blank=True)
    full_name = models.CharField(max_length=200, blank=True)
    dob = models.DateField(blank=True, null=True)
    gender = models.CharField(max_length=10, choices=GENDER_CHOICES, blank=True)
    address = models.TextField(blank=True)
    phone = models.CharField(max_length=20, blank=True)
    emergency_contact = models.CharField(max_length=200, blank=True)
    blood_type = models.CharField(max_length=3, choices=BLOOD_TYPE_CHOICES, blank=True)
    allergies = models.TextField(blank=True)
    insurance_provider = models.CharField(max_length=100, blank=True)
    insurance_number = models.CharField(max_length=100, blank=True)

    def __str__(self):
        return f"Profile of {self.user.username}"
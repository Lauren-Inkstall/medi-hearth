# backend/backend/urls.py

from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from rest_framework_simplejwt.views import TokenRefreshView
from django.conf import settings
from django.conf.urls.static import static

# import your custom login & register
from users.views import MyTokenObtainPairView, RegisterView, ProfileViewSet
from patients.views import (
    MedicalHistoryViewSet, PrescriptionViewSet,
    DailyCheckinViewSet, CareTeamInviteViewSet,
    EmergencyContactViewSet,
)
from doctors.views import AppointmentViewSet, DoctorNoteViewSet, EmergencyCaseViewSet
from caretakers.views import DependentViewSet, AlertViewSet
from messaging.views import MessageViewSet
from reports.views import ReportViewSet

router = DefaultRouter()
router.register('profile', ProfileViewSet, basename='profile')
router.register('patients/history', MedicalHistoryViewSet, basename='history')
router.register('patients/prescriptions', PrescriptionViewSet, basename='prescriptions')
router.register('patients/checkins', DailyCheckinViewSet, basename='checkins')
router.register('patients/invite', CareTeamInviteViewSet, basename='invite')
router.register('patients/emergency-contact', EmergencyContactViewSet, basename='emergency-contact')
router.register('doctors/appointments', AppointmentViewSet, basename='appointments')
router.register('doctors/notes', DoctorNoteViewSet, basename='notes')
router.register('doctors/emergency-cases', EmergencyCaseViewSet, basename='emergency-cases')
router.register('caretakers/dependents', DependentViewSet, basename='dependents')
router.register('caretakers/alerts', AlertViewSet, basename='alerts')
router.register('messages', MessageViewSet, basename='messages')
router.register('reports', ReportViewSet, basename='reports')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/auth/login/',  MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/auth/refresh/', TokenRefreshView.as_view(),   name='token_refresh'),
    path('api/auth/register/', RegisterView.as_view(),      name='auth_register'),
    path('api/', include(router.urls)),
]

# serve media files during development
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

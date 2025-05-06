from django.urls import include, path
from rest_framework.routers import DefaultRouter
from .views import (
    AppointmentViewSet,
    DoctorNoteViewSet,
    EmergencyCaseViewSet,
)

router = DefaultRouter()
router.register('appointments', AppointmentViewSet)
router.register('notes', DoctorNoteViewSet)
router.register('emergency-cases', EmergencyCaseViewSet)

urlpatterns = [ path('', include(router.urls)), ]
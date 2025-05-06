from django.urls import include, path
from rest_framework.routers import DefaultRouter
from .views import MedicalHistoryViewSet, PrescriptionViewSet, DailyCheckinViewSet, CareTeamInviteViewSet, EmergencyContactViewSet

router = DefaultRouter()
router.register('history', MedicalHistoryViewSet)
router.register('prescriptions', PrescriptionViewSet)
router.register('checkins', DailyCheckinViewSet)
router.register('invite', CareTeamInviteViewSet)
router.register('emergency-contact', EmergencyContactViewSet)

urlpatterns = [ path('', include(router.urls)), ]
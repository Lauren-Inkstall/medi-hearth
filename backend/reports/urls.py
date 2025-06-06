from django.urls import include, path
from rest_framework.routers import DefaultRouter
from .views import ReportViewSet

router = DefaultRouter()
router.register('reports', ReportViewSet)

urlpatterns = [ path('', include(router.urls)), ]
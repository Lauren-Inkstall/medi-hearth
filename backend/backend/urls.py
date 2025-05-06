# File: backend/backend/urls.py
from django.contrib import admin
from django.urls import path, include
from rest_framework import routers

# JWT views
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

# Users app views
from users.views import RegisterView, UserViewSet, CurrentUserView

# Set up router for user endpoints
router = routers.DefaultRouter()
router.register(r'users', UserViewSet, basename='user')

urlpatterns = [
    # Admin
    path('admin/', admin.site.urls),

    # Authentication
    path('api/auth/register/', RegisterView.as_view(), name='register'),
    path('api/auth/login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/auth/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/auth/user/', CurrentUserView.as_view(), name='current-user'),
    path('api/auth/', include('users.urls')),

    # API routes
    path('api/', include(router.urls)),
]

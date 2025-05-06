from rest_framework import viewsets, status
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework_simplejwt.views import TokenObtainPairView
from django.contrib.auth import get_user_model
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

from .models import CustomUser, Profile, Role
from .serializers import ProfileSerializer, RegisterSerializer, UserSerializer

User = get_user_model()

class CurrentUserView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        serializer = UserSerializer(request.user)
        return Response(serializer.data)

# USER VIEWSET: enables /api/users/ endpoints
class UserViewSet(viewsets.ModelViewSet):
    queryset = CustomUser.objects.all()
    serializer_class = UserSerializer
    permission_classes = [IsAuthenticated]

# PROFILE
class ProfileViewSet(viewsets.ModelViewSet):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return self.queryset.filter(user=self.request.user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

# CUSTOM LOGIN TO ALLOW EMAIL OR USERNAME + RETURN USER DATA
class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        # allow login via email
        username = attrs.get('username')
        if '@' in username:
            try:
                user_obj = CustomUser.objects.get(email=username)
                attrs['username'] = user_obj.username
            except CustomUser.DoesNotExist:
                pass
        data = super().validate(attrs)
        # include user details in response
        data['user'] = UserSerializer(self.user).data
        return data

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

# FETCH CURRENT USER
class UserDetailView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        return Response(UserSerializer(request.user).data)

# CUSTOM REGISTER VIEW
class RegisterView(APIView):
    def post(self, request, *args, **kwargs):
        # Deserialize input
        serializer = RegisterSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        username = serializer.validated_data['username']
        role = serializer.validated_data['role']

        # Look up existing users by username
        existing_users = User.objects.filter(username=username)
        if existing_users.exists():
            user = existing_users.first()
            # If they already have this role, reject
            if user.roles.filter(name=role).exists():
                return Response(
                    {'error': 'Username taken for this role.'},
                    status=status.HTTP_400_BAD_REQUEST
                )
            # If username exists but role differs, ensure personal details match
            for field in ['first_name', 'last_name', 'email']:
                existing_value = getattr(user, field)
                provided_value = serializer.validated_data.get(field)
                if provided_value is None or existing_value != provided_value:
                    return Response(
                        {'error': f"Provided {field} does not match existing user."},
                        status=status.HTTP_400_BAD_REQUEST
                    )
            # Append new role to existing user
            group = user.roles.model.objects.get(name=role)
            user.roles.add(group)
            return Response(
                {'message': 'New role added successfully.'},
                status=status.HTTP_200_OK
            )

        # No existing user: create a new one
        new_user = serializer.save()
        return Response(
            {'message': 'User registered successfully.'},
            status=status.HTTP_201_CREATED
        )
from rest_framework import viewsets, status
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

from .models import CustomUser, Profile, Role
from .serializers import ProfileSerializer, RegisterSerializer, UserSerializer

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
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = RegisterSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        username = serializer.validated_data['username']
        name     = serializer.validated_data['name']
        email    = serializer.validated_data['email']
        password = serializer.validated_data['password']
        role_name= serializer.validated_data['userType']
        role_obj = Role.objects.get(name=role_name)

        # At this point, username & email are guaranteed unique by the serializer
        try:
            user = CustomUser(
                username=username,
                email=email,
                first_name=name  # or store in profile if you prefer
            )
            user.set_password(password)
            user.save()
        except IntegrityError:
            return Response(
                {"detail": "Username or email conflict, please choose another."},
                status=status.HTTP_400_BAD_REQUEST
            )

        # create profile & assign role
        Profile.objects.create(user=user)
        user.roles.add(role_obj)

        return Response({"detail": "Registered successfully."}, status=status.HTTP_201_CREATED)
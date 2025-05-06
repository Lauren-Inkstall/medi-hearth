from rest_framework import serializers
from django.db.models import ImageField, FileField
from .models import CustomUser, Role, Profile

class RoleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Role
        fields = ('name',)

class UserSerializer(serializers.ModelSerializer):
    roles       = serializers.SlugRelatedField(
                      many=True,
                      read_only=True,
                      slug_field='name'
                  )
    profile_pic = serializers.SerializerMethodField()
    full_name   = serializers.SerializerMethodField()

    class Meta:
        model  = CustomUser
        fields = [
            'id',
            'username',
            'email',
            'roles',
            'full_name',
            'profile_pic',
        ]

    def get_full_name(self, obj):
        # prefer the profile’s full_name if set, else fall back to User.first_name
        try:
            name = obj.profile.full_name
            if name:
                return name
        except Profile.DoesNotExist:
            pass
        return obj.first_name or obj.username

    def get_profile_pic(self, obj):
        # grab the Profile.photo ImageField
        try:
            photo = obj.profile.photo
            if photo and hasattr(photo, 'url'):
                return photo.url
        except Profile.DoesNotExist:
            pass
        return None

class ProfileSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)

    class Meta:
        model = Profile
        fields = '__all__'

class RegisterSerializer(serializers.Serializer):
    username = serializers.CharField(max_length=150)
    name     = serializers.CharField(max_length=150)
    email    = serializers.EmailField()
    password = serializers.CharField(write_only=True, min_length=8)
    userType = serializers.CharField()  # just a free-text field for now

    def validate_username(self, value):
        if CustomUser.objects.filter(username=value).exists():
            raise serializers.ValidationError("This username is already taken.")
        return value

    def validate_email(self, value):
        if CustomUser.objects.filter(email=value).exists():
            raise serializers.ValidationError("This email is already registered.")
        return value

    def validate_userType(self, value):
        if not Role.objects.filter(name=value).exists():
            raise serializers.ValidationError(f"Invalid role: {value}")
        return value
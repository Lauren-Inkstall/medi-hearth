from rest_framework import serializers
from django.db.models import ImageField, FileField
from django.contrib.auth import get_user_model
from django.contrib.auth.models import Group
from .models import CustomUser, Role, Profile

User = get_user_model()

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

class RegisterSerializer(serializers.ModelSerializer):
    # Role selection must match a Group name
    role = serializers.ChoiceField(
        choices=[
            ('patient', 'Patient'),
            ('doctor', 'Doctor'),
            ('caretaker', 'Caretaker')
        ]
    )
    password = serializers.CharField(write_only=True, min_length=8)

    class Meta:
        model = User
        fields = ['username', 'password', 'first_name', 'last_name', 'email', 'role']

    def create(self, validated_data):
        # Pop off role and password
        role_name = validated_data.pop('role')
        password = validated_data.pop('password')

        # Create the User instance
        user = User(**validated_data)
        user.set_password(password)
        user.save()

        # Assign the initial role via Group
        group = Group.objects.get(name=role_name)
        user.roles.add(group)

        return user
from pyexpat import model
from rest_framework import serializers
from api.models import Profile

class ProfileSerializer(serializers.ModelSerializer):
  class Meta:
    model=Profile
    fields = ['id', 'Fname', 'Mname', 'Lname', 'email', 'dob', 'state', 'gender', 'location', 'pimage', 'rdoc']
from rest_framework import serializers
from prephub_task.models import *


class Countries_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Countries
        fields = '__all__'

class States_Serializer(serializers.ModelSerializer):
    class Meta:
        model = States
        fields = '__all__'

class Cities_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Cities
        fields = '__all__'

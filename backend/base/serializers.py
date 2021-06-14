from rest_framework import serializers
from django.contrib.auth.models import User
from .models import *

#just like the object response model in springboot ay?
class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields =    '__all__'


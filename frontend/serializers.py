from rest_framework import serializers
from frontend.models import Blog

# BLog serializers
class Blogserializers(serializers.ModelSerializer):
    class Meta:
        model = Blog
        fields = '__all__'
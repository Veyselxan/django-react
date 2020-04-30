from django.urls import path, include
from frontend.views import *
from rest_framework import routers
from .api import BlogViewSets
app_name = 'frontend'
routers = routers.DefaultRouter()
routers.register('api/admin/blog', BlogViewSets, 'Blog')
urlpatterns =  routers.urls



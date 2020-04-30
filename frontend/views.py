from django.shortcuts import render
from django.http import HttpResponseRedirect, HttpResponse
from .models import *
from django.views import View

class Index(View):
    def get(self, request, *args, **kwargs):
        blogs = Blog.objects.all()
        template_name = 'frontend/index.html'
        context = {
            'blogs':blogs
        }
        return render(request, template_name, context)

class Blogdetal(View):

    def get(self, request,slug):
        blog = Blog.objects.get(slug=slug)
        template_name = 'frontend/detal.html'
        context = {
            'blog': blog
        }
        return render(request, template_name, context)





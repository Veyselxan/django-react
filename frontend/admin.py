from django.contrib import admin
from frontend.models import Blog


class BlogAdmin(admin.ModelAdmin):
     list_display = ('title', 'slug')


admin.site.register(Blog,BlogAdmin)
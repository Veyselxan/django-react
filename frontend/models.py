from django.db import models
from django.contrib.auth.models import User
class Blog(models.Model):
    title = models.CharField(("Blog Title"), max_length=100)
    slug = models.SlugField(("Blog slug"), null=True, blank=True, default=None, max_length=50)
    description = models.TextField(("Domain description"), max_length=10000, null=True)
    owner = models.ForeignKey(User, related_name='blogs', on_delete=models.CASCADE, null=True)
    date_updated = models.DateTimeField(auto_now=True, null=True)
    date_created = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name = "Bloglar"
        verbose_name_plural = "Bloglar"
    def __str__(self):
        return self.title


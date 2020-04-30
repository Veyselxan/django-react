from frontend.models import Blog
from rest_framework import viewsets,permissions
from .serializers import Blogserializers
from rest_framework import filters


#Blog ViewSets
class BlogViewSets(viewsets.ModelViewSet):

    permission_classes = [
        permissions.IsAuthenticated
    ]
    search_fields = ['title']
    filter_backends = (filters.SearchFilter,)

    serializer_class = Blogserializers

    def get_queryset(self):

        return self.request.user.blogs.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

from frontend.models import Blog
from rest_framework import generics,permissions
from rest_framework.response import Response
from knox.models import AuthToken
from .serializers import Userserializers, Registerserializers, Loginserializers


#Register Api
class RegisterApi(generics.GenericAPIView):
    serializer_class =  Registerserializers
    
    def post(self,request, *args,**kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        return Response({
            "user": Userserializers(user, context=self.get_serializer_context()).data,
            "token": AuthToken.objects.create(user)[1]

        })
#Login Api

class LoginApi(generics.GenericAPIView):
    serializer_class = Loginserializers

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data
        return Response({
            "user": Userserializers(user, context=self.get_serializer_context()).data,
            "token": AuthToken.objects.create(user)[1]

        })
#GET user Api

class UserApi(generics.RetrieveAPIView):
    permission_classes = [
        permissions.IsAuthenticated
    ]
    serializer_class = Userserializers
    
    def get_object(self):
        return self.request.user
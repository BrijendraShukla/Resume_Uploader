from rest_framework.response import Response
from api.models import Profile
from api.serializers import ProfileSerializer
from rest_framework.views import APIView
from rest_framework import status

class ProfileView(APIView):
  def post(self, request, format=None):
    serializer = ProfileSerializer(data=request.data)
    if serializer.is_valid():
      serializer.save()
      return Response({'msg':'Resume Uploaded Successfully', 'status':'success', 'candidate':serializer.data}, status=status.HTTP_201_CREATED)
    return Response(serializer.errors)
  
  def get(self, request, pk=None, format=None):
    if pk is not None:
      candidate = Profile.objects.get(pk=pk)
      serializer = ProfileSerializer(candidate)
      return Response({'status':'success', 'candidates':serializer.data,}, status=status.HTTP_200_OK)
    candidates = Profile.objects.all()
    serializer = ProfileSerializer(candidates, many=True)
    return Response({'status':'success', 'candidates':serializer.data,}, status=status.HTTP_200_OK)
  
  def put(self, request, pk, format=None):
    candidate = Profile.objects.get(pk=pk)
    serializer = ProfileSerializer(candidate,data=request.data, partial=True)
    if serializer.is_valid():
      serializer.save()
      return Response({'msg':'Data updated Successfully', 'status':'success','candidate':serializer.data}, status=status.HTTP_202_ACCEPTED)
    return Response(serializer.errors)  
  
  def delete(self,request,pk, format=None):
    candidates = Profile.objects.get(pk=pk)
    candidates.delete()
    return Response({'status':'Deleted'}, status=status.HTTP_200_OK)
    


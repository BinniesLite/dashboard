from rest_framework.decorators import api_view
from rest_framework.generics import ListCreateAPIView
from rest_framework.response import Response
from rest_framework import status

from .models import Config, Attribute

from .serializers import ConfigSerializer, AttributeSerializer

     
class ConfigList(ListCreateAPIView):
    queryset = Config.objects.all()
    serializer_class = ConfigSerializer
    
@api_view(['GET', 'PUT', 'DELETE'])
def config_detail(request, pk):
    match request.method: 
        case 'GET':
            config = Config.objects.get(pk=pk)
            serializer = ConfigSerializer(config)
            
            return Response(serializer.data, status=status.HTTP_202_ACCEPTED)
        case 'PUT':
            try:
                config = Config.objects.get(pk=pk)
            except Config.DoesNotExist:
                return Response({'Error': 'Does Not Exits'})
            
            serializer = ConfigSerializer(config, data=request.data)
            
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
            else:
                return Response({'Error': 'You dumb bitch'}, status=status.HTTP_400_BAD_REQUEST)
        case 'DELETE':
            try:
                config = Config.objects.get(pk=pk)
            except Config.DoesNotExist:
                return Response({'Error': 'Stupid'})
           
            config.delete()
            
            return Response({'success': 'Delete successfully'})
            


@api_view(['GET','POST'])
def attribute_detail(request, pk):
    
    pass
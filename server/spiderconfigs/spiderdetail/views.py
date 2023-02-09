from rest_framework.decorators import api_view
from rest_framework.generics import ListCreateAPIView, ListAPIView
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status

import math

from .models import Config, Attribute

from .serializers import ConfigSerializer, AttributeSerializer


MAX_PAGE = 12
class ConfigListAPIView(ListCreateAPIView):
    queryset = Config.objects.all()
    serializer_class = ConfigSerializer


# Support Pagination
class ConfigListBackendAPIView(APIView):
    def get(self, request):
        # It is a dictionary
        page = int(request.GET.get('page', 1))
        per_page = MAX_PAGE
        spider_configs = Config.objects.all()

        # pagination
        total = spider_configs.count()
        start = (page - 1) * per_page
        end = page * per_page
        
        serializer = ConfigSerializer(spider_configs[start:end], many=True)
        return Response({
            'data': serializer.data,
            'total': total,
            'page': page, 
            'last_page': math.ceil(total / per_page)
        }, status=status.HTTP_200_OK)
    
    def post(self, request):
        serializer = ConfigSerializer(data=request.data)
        
        if serializer.is_valid():
            serializer.save()
            return Response({'data': serializer.data}, status=status.HTTP_201_CREATED)
        else:
            return Response({'error': 'data error'})
        
    

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
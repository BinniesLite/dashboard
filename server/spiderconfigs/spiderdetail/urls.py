from django.urls import path, re_path
from .views import ConfigListAPIView, config_detail, ConfigListBackendAPIView

urlpatterns = [
    path('list/', ConfigListBackendAPIView.as_view(), name='config_list'),
    path('<int:pk>/', config_detail, name='config_detail'),
    path('backend/', ConfigListBackendAPIView.as_view(), name="config_list_backend")
]
from django.urls import path, re_path
from .views import ConfigList, config_detail

urlpatterns = [
    re_path(r'^(list)|(^$)/?', ConfigList.as_view(), name='config_list'),
    path('<int:pk>/', config_detail, name='config_detail')
]
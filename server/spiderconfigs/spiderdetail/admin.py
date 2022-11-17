from django.contrib import admin

from .models import Attribute, Config

# Register your models here.
admin.site.register(Attribute)
admin.site.register(Config)


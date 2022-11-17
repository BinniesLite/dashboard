from django.db import models


class Config(models.Model):
    name = models.CharField(max_length=200)
    url = models.CharField(max_length=500)
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self) -> str:
        return self.name
    

class Attribute(models.Model):
    key = models.CharField(max_length=100)
    value = models.CharField(max_length=150)
    config = models.ForeignKey(Config, on_delete=models.CASCADE, related_name="attributes")
    
    def __str__(self) -> str:
        return self.key
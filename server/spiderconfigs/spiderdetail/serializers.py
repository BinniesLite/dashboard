from rest_framework import serializers
from .models import Attribute, Config


class AttributeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Attribute
        fields = ('key','value', 'id')
        
    
class ConfigSerializer(serializers.ModelSerializer):
    attributes = AttributeSerializer(many=True)
    
    class Meta:
        model = Config
        fields = "__all__"
        
    def create(self, validated_data):
        attributes_data = validated_data.pop('attributes')
        config = Config.objects.create(**validated_data)

        for i in attributes_data:
            Attribute.objects.create(config=config, **i)
        
        return config

    def update(self, instance, validated_data):
        try: 
            instance.name = validated_data.get('name', instance.name)
            instance.url = validated_data.get('url', instance.url)
            instance.description = validated_data.get('description', instance.description)
            instance.created_at = validated_data.get('created_at', instance.created_at)
        except TypeError as e:
            print(e)
        
        instance.save()
        
        attributes = validated_data.get('attributes', None)
        
        if attributes:
            for attr in attributes:
                attr_id = attr.get('id', None)
                print(attr_id)  
                if attr_id:
                    attr_item = Attribute.objects.get(pk=attr_id)
                    
                    print(attr_item)
                    attr_item.key = attr.get('key', attr.key)
                    attr_item.value = attr.get('value', attr.value)

                    attr_item.save()
                else:
                    pass 
                    # Attribute.objects.create(config=instance, **attr)
            
        return instance
        
        
from rest_framework import serializers
from .models import Favorite


class FavoriteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Favorite
        fields = ['id', 'name', 'status', 'species', 'character_type',
                  'gender', 'origin', 'location', 'image', 'created_at']

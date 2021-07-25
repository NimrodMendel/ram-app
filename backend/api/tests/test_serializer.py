from django.test import TestCase
from ..serializers import FavoriteSerializer
from ..models import Favorite


class SerializerTest(TestCase):

    def setUp(self):
        self.favorite_attributes = {
            'character_id': 1,
            'name': 'test',
            'status': 'Alive',
            'species': 'Human',
            'character_type': 'Pickle',
            'gender': 'Male',
            'origin': 'TestOrigin',
            'location': 'TestLocation',
            'image': '',
            'created_at': '2021-07-25'
        }

        self.favorite = Favorite(**self.favorite_attributes)
        self.favorite.save()

        self.serializer = FavoriteSerializer(instance=self.favorite)

    def test_contains_expected_fields(self):
        """Test sets of keys in Favorite Serializer"""
        data = self.serializer.data

        self.assertEqual(set(data.keys()), set(['character_id', 'name', 'status', 'species', 'character_type',
                                                'gender', 'origin', 'location', 'image', 'created_at']))

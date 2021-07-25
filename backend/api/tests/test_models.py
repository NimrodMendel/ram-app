from django.test import TestCase
from ..models import Favorite
from django.core.exceptions import ValidationError


class ModelTest(TestCase):

    def test_getting_favorite_from_db(self):
        """Test getting favorite character from db correctly"""
        character_id = 1
        name = 'test'
        status = 'Alive'
        species = 'Human'
        character_type = 'Pickle'
        gender = 'Male'
        origin = 'TestOrigin'
        location = 'TestLocation'
        image = ''
        created_at = '2021-07-25'

        character = Favorite(character_id, name, status, species,
                             character_type, gender, origin, location, image, created_at)
        character.save()

        favorites = Favorite.objects.all()

        self.assertEqual(favorites[0].name, name)

    def test_creating_new_character(self):
        """Test creating new favorite character works fine"""
        character_id = 1
        name = 'test'
        status = 'Alive'
        species = 'Human'
        character_type = 'Pickle'
        gender = 'Male'
        origin = 'TestOrigin'
        location = 'TestLocation'
        image = ''
        created_at = '2021-07-25'

        character = Favorite(character_id, name, status, species,
                             character_type, gender, origin, location, image, created_at)
        character.save()
        self.assertEqual(character.name, name)

    def test_raising_error_invalid_character(self):
        """Test raising error on invalid input"""
        character_id = None
        name = ''
        status = ''
        species = ''
        character_type = ''
        gender = ''
        origin = ''
        location = ''
        image = ''
        created_at = ''

        with self.assertRaises(ValidationError):
            character = Favorite(character_id, name, status, species,
                                 character_type, gender, origin, location, image, created_at)
            character.save()

    def test_deleting_favorite_character(self):
        """Test deleting favorite character from database correctly"""
        character_id = 1
        name = 'test'
        status = 'Alive'
        species = 'Human'
        character_type = 'Pickle'
        gender = 'Male'
        origin = 'TestOrigin'
        location = 'TestLocation'
        image = ''
        created_at = '2021-07-25'

        character = Favorite(character_id, name, status, species,
                             character_type, gender, origin, location, image, created_at)
        character.save()

        deleted_character = Favorite.objects.filter(
            character_id=character_id).delete()

        favorites = Favorite.objects.all()

        self.assertEqual(len(list(favorites)), 0)

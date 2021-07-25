from django.db import models


class Favorite(models.Model):

    character_id = models.IntegerField(
        primary_key=True, null=False, blank=False)
    name = models.CharField(max_length=255)
    status = models.CharField(max_length=15)
    species = models.CharField(max_length=255)
    character_type = models.CharField(max_length=255, blank=True)
    gender = models.CharField(max_length=15)
    origin = models.CharField(max_length=255)
    location = models.CharField(max_length=255)
    image = models.URLField()
    created_at = models.DateField()

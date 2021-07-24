from django.db import models

# Create your models here.


class Favorite(models.Model):

    STATUS = (
        ('Dead', 'Dead'),
        ('Alive', 'Alive'),
        ('Unknown', 'Unknown')
    )

    GENDER = (
        ('Female', 'Female'),
        ('Male', 'Male'),
        ('Genderless', 'Genderless'),
        ('Unknown', 'Unknown')
    )

    id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=255)
    status = models.CharField(max_length=15)
    species = models.CharField(max_length=255)
    character_type = models.CharField(max_length=255, blank=True)
    gender = models.CharField(max_length=15)
    origin = models.CharField(max_length=255)
    location = models.CharField(max_length=255)
    image = models.URLField()
    created_at = models.DateField()

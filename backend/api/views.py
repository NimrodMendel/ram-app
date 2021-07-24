from django.shortcuts import render
from django.http import HttpResponse, HttpRequest
from rest_framework.views import APIView
from .serializers import FavoriteSerializer
from rest_framework.response import Response
from .models import Favorite
import requests
import json


# Create your views here.


class FeedView(APIView):
    def get(self, request):

        name = request.query_params['name']
        gender = request.query_params['gender']
        status = request.query_params['status']
        species = request.query_params['species']

        url = 'https://rickandmortyapi.com/api/character'
        i = 1
        res = requests.get(url).json()
        characters = []

        while True:
            requestUrl = f'{url}/?page={i}&name={name}&gender={gender}&status={status}&species={species}'
            res = json.loads(requests.get(requestUrl).text)
            characters = characters + res['results']
            i = i + 1

            if res['info']['next'] is None:
                break

        return Response(characters)


class FavoritesView(APIView):
    serializer_class = FavoriteSerializer

    def post(self, request, format=None):
        serializer = self.serializer_class(data=request.data['body'])

        if serializer.is_valid():

            id = request.data['body']['id']
            queryset = Favorite.objects.filter(id=id)

            if not queryset.exists():
                name = request.data['body']['name']
                status = request.data['body']['status']
                species = request.data['body']['species']
                character_type = request.data['body']['character_type']
                gender = request.data['body']['gender']
                origin = request.data['body']['origin']
                location = request.data['body']['location']
                image = request.data['body']['image']
                created_at = request.data['body']['created_at']
                favorite = Favorite(
                    id, name, status, species, character_type, gender, origin, location, image, created_at)
                favorite.save()
                return Response(FavoriteSerializer(favorite).data)

        return Response({'message': 'Character is already saved'})

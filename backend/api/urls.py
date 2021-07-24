from django.contrib import admin
from django.urls import path
from .views import FavoritesView, FeedView

urlpatterns = [
    path('feed', FeedView.as_view()),
    path('favorites', FavoritesView.as_view())

]

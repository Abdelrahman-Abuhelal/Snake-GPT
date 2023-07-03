
from django.contrib import admin
from django.urls import path,include
from api import views , urls

urlpatterns = [
    path('',include(urls)),
]

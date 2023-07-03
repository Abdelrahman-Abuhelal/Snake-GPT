
from django.contrib import admin
from django.urls import path,include
from api import urls as apiurls

urlpatterns = [
    path('',include(apiurls)),

]

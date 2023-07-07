
from django.contrib import admin
from django.urls import path,include
from api import urls as apiUrls
from llm import urls as llmUrls


urlpatterns = [
    path('',include(apiUrls)),
    path('',include(llmUrls)),

]

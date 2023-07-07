from django.urls import path
from .views import receive_data

urlpatterns = [
    path('receive-data/', receive_data, name='receive-data'),
]

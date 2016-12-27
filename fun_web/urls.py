from django.conf.urls import url, include
from views import *

urlpatterns = [
    url(r'^$', cool),
    url(r'^sleep$', sleep),
    url(r'^cool$', cool),
]

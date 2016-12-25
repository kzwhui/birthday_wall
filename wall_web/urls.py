from django.conf.urls import url, include
from views import *

urlpatterns = [
    url(r'^$', index),
    url(r'get_wishes', get_wishes),
    url(r'add_wish', add_wish),
]

from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
import json
from common.log import logger

# Create your views here.
def index(request):
    return render(request, 'index.html')
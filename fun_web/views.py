#encoding=utf8
from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
import json
from common.log import logger
from models import *

# Create your views here.
def index(request):
    return render(request, 'fun_web/index.html')

def sleep(request):
    return render(request, 'fun_web/listen_scroll.html')

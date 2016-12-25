#encoding=utf8
from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
import json
from common.log import logger
from models import *

# Create your views here.
def index(request):
    return render(request, 'index.html')

def get_wishes(request):
    ret_root = {'data' : '', 'msg' : 'get fail', 'ret' : -1}
    wish_infos = TWishInfo.objects.order_by('-id')[:10]
    wishes = []
    for wish in wish_infos:
        tmp = {}
        tmp['time'] = wish.ctime.strftime("%H:%I:%S")
        tmp['name'] = wish.name
        tmp['wish_statement'] = wish.wish_statement
        wishes.append(tmp)

    ret_root['data'] = wishes
    ret_root['msg'] = 'suc'
    ret_root['ret'] = 0
    return JsonResponse(ret_root)

def add_wish(request):
    ret_root = {'data' : '', 'msg' : 'add fail', 'ret' : -1}
    if not request.GET:
        ret_root['msg'] = 'add fail, need get method'
        return JsonResponse(ret_root)

    name = request.GET.get('name', None)
    wish_info = request.GET.get('wish', None)

    if not name or not wish_info:
        ret_root['msg'] = 'add fail, name or wish is empty'
        return JsonResponse(ret_root)

    try:
        obj = TWishInfo.objects.create(name = name.strip(), wish_statement = wish_info.strip())
        tmp = {}
        tmp['name'] = obj.name
        tmp['wish'] = obj.wish_statement
        tmp['time'] = obj.ctime.strftime("%Y:%m:%d %H:%I:%S")
        ret_root['data'] = tmp
        ret_root['msg'] = 'suc'
        ret_root['ret'] = 0
        return JsonResponse(ret_root)
    except:
        ret_root['msg'] = 'already exist'
        return JsonResponse(ret_root)
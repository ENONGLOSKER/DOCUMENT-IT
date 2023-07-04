from django.shortcuts import render
from .models import Kategori, Postingan
from rest_framework.authentication import BasicAuthentication
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from .serializers import KategoriSerializer, PostinganSerializer
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from django.contrib.auth import authenticate
from rest_framework.permissions import AllowAny
from rest_framework import status   
from .serializers import UserSerializer
from rest_framework.pagination import PageNumberPagination
from django_filters import rest_framework as filters
from drf_yasg.utils import swagger_auto_schema
from drf_yasg import openapi

# PAGINATION 1
class CustomPagination(PageNumberPagination):
    page_size = 20
    page_size_query_param = 'page_size'
    max_page_size = 100

# FILTERING, SORTING DAN SEARCHING
class KategoriFilter(filters.FilterSet):
    class Meta:
        model = Kategori
        fields = {
            'nama_kategori': ['exact', 'icontains'],
        }

class PostinganFilter(filters.FilterSet):
    class Meta:
        model = Postingan
        fields = {
            'judul': ['exact', 'icontains'],
            'kategori': ['exact'],
        }

# KATEGORI
@swagger_auto_schema(
    methods=['GET', 'POST'],
    responses={
        200: 'Daftar kategori berhasil ditemukan',
        201: 'Kategori berhasil ditambahkan',
        400: 'Terjadi kesalahan'
    }
)
@api_view(['GET','POST'])
@authentication_classes([BasicAuthentication])
@permission_classes([IsAuthenticated])
def kategori_all(request):
    if request.method == 'GET':
        kategori = Kategori.objects.all()
        # FILTERING SORTING DAN SEARCHING
        kategori_filter = KategoriFilter(request.GET, queryset=kategori)
        # PAGINATION 2
        paginator = CustomPagination()
        result_page = paginator.paginate_queryset(kategori_filter.qs, request)
        serializer = KategoriSerializer(result_page, many=True)
        return paginator.get_paginated_response(serializer.data)
    elif request.method == 'POST':
        serializer = KategoriSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)

@swagger_auto_schema(
    methods=['GET', 'PUT', 'DELETE'],
    responses={
        200: 'Kategori berhasil ditemukan',
        204: 'Kategori berhasil dihapus',
        400: 'Terjadi kesalahan'
    }
)
@api_view(['GET','PUT','DELETE'])
@authentication_classes([BasicAuthentication])
@permission_classes([IsAuthenticated])
def kategori_detail(request,id):
    try:
        kategori = Kategori.objects.get(id=id)
    except Kategori.DoesNotExist:
        return Response(status=404)

    if request.method == 'GET':
        serializer = KategoriSerializer(kategori)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer =KategoriSerializer(kategori, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=400)
    elif request.method == 'DELETE':
        kategori.delete()
        return Response(status=204)

# POSTINGAN
@swagger_auto_schema(
    methods=['GET', 'POST'],
    responses={
        200: 'Daftar postingan berhasil ditemukan',
        201: 'Postingan berhasil ditambahkan',
        400: 'Terjadi kesalahan'
    }
)
@api_view(['GET','POST'])
@authentication_classes([BasicAuthentication])
@permission_classes([IsAuthenticated])
def postingan_all(request):
    if request.method == 'GET':
        postingan = Postingan.objects.all()
        postingan_filter = PostinganFilter(request.GET, queryset=postingan)
        paginator = CustomPagination()
        result_page = paginator.paginate_queryset(postingan_filter.qs, request)
        serializer = PostinganSerializer(result_page, many=True)
        return paginator.get_paginated_response(serializer.data)
    elif request.method == 'POST':
        serializer = PostinganSerializer(data=request.data)
        if serializer.is_valid():
            kategori_nama = request.data.get('kategori')
            kategori, created = Kategori.objects.get_or_create(nama_kategori=kategori_nama)
            serializer.save(penulis=request.user, kategori=kategori)
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)

@swagger_auto_schema(
    methods=['GET', 'PUT', 'DELETE'],
    responses={
        200: 'Postingan berhasil ditemukan',
        204: 'Postingan berhasil dihapus',
        400: 'Terjadi kesalahan'
    }
)
@api_view(['GET','PUT','DELETE'])
@authentication_classes([BasicAuthentication])
@permission_classes([IsAuthenticated])
def postingan_detail(request,id):
    try:
        postingan = Postingan.objects.get(id=id)
    except postingan.DoesNotExist:
        return Response(status=404)

    if request.method == 'GET':
        serializer=PostinganSerializer(postingan)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = PostinganSerializer(postingan, data=request.data)
        if serializer.is_valid():
            kategori_nama = request.data.get('kategori')
            kategori, created = Kategori.objects.get_or_create(nama_kategori=kategori_nama)
            serializer.save(kategori=kategori)
            return Response(serializer.data)
        return Response(serializer.errors, status=400)
    elif request.method == 'DELETE':
        postingan.delete()
        return Response(status=204)


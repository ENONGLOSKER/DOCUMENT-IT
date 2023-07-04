from rest_framework import serializers
from . models import Kategori, Postingan
from django.contrib.auth.models import User

class KategoriSerializer(serializers.ModelSerializer):
    class Meta:
        model = Kategori
        fields = "__all__"

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'password']
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User.objects.create_user(
            username=validated_data['username'],
            email=validated_data['email'],
            password=validated_data['password']
        )
        return user

class PostinganSerializer(serializers.ModelSerializer):
    kategori = serializers.CharField(source='kategori.nama_kategori', read_only=True)
    penulis = serializers.SerializerMethodField()
    
    class Meta:
        model = Postingan
        fields = ['id', 'judul', 'gmbar', 'konten', 'create_at', 'update_at', 'kategori', 'penulis']

    def get_kategori(self, obj):
        return obj.kategori.nama_kategori

    def get_penulis(self, obj):
        return obj.penulis.username

from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Kategori(models.Model):
    nama_kategori = models.CharField(max_length=50)
    create_at = models.DateField(auto_now_add=True)
    update_at = models.DateField(auto_now=True)

    def __str__(self):
        return self.nama_kategori

class Postingan(models.Model):
    judul = models.CharField(max_length=100)
    gmbar = models.ImageField(upload_to='img')
    konten = models.TextField()
    kategori = models.ForeignKey(Kategori, max_length=50, on_delete=models.CASCADE)
    penulis = models.ForeignKey(User, on_delete=models.CASCADE)
    create_at = models.DateField(auto_now_add=True)
    update_at = models.DateField(auto_now=True)

    def __str__(self):
        return self.judul

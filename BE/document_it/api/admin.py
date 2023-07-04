from django.contrib import admin
from . models  import Kategori, Postingan

# Register your models here.
class AdminKategori(admin.ModelAdmin):
    list_display = ('nama_kategori','create_at','update_at')
class AdminPostingan(admin.ModelAdmin):
    list_display = ('judul','gmbar','konten','kategori','penulis','create_at','update_at')

admin.site.register(Kategori, AdminKategori)
admin.site.register(Postingan, AdminPostingan)
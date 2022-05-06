from django.contrib import admin

# Register your models here.

from api.models import Author, Book, Category, Comment

admin.site.register(Author)
admin.site.register(Category)
admin.site.register(Book)
admin.site.register(Comment)


from django.contrib import admin
from prephub_task.models import *
# Register your models here.

@admin.register(Countries)
class CountriesAdmin(admin.ModelAdmin ):
    list_display = [f.name for f in Countries._meta.fields]

@admin.register(States)
class StatesAdmin(admin.ModelAdmin ):
    list_display = [f.name for f in States._meta.fields]

@admin.register(Cities)
class CitiesAdmin(admin.ModelAdmin ):
    list_display = [f.name for f in Cities._meta.fields]

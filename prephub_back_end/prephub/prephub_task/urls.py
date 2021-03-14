from django.urls import path
from prephub_task import views
from django.views.decorators.csrf import csrf_exempt
from prephub_task.views import *



urlpatterns = [
    path('countries', views.All_countries.as_view()),
    path('<country>/states', views.All_states.as_view()),
    path('<con>/<state>/cities', views.All_cities.as_view()),
    
]
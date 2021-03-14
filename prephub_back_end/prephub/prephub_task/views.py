from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from prephub_task.models import *
from prephub_task.serilizers import *
from rest_framework import status
# Create your views here.

# This def used for all countries retrived from db
class All_countries(APIView):
    def get(self,request):
        try:
            all_countries= Countries.objects.all()
            serializer = Countries_Serializer(all_countries , many=True)
            get_all_countries=serializer.data
            print("get all countries..")
        except Exception as e:
            print(e)
            get_all_countries=[]
        return Response(get_all_countries, status=status.HTTP_200_OK)
        

# This def used for all states retrived from db for requsted country.
class All_states(APIView):
    def get(self,request,country):
        try:
            get_country= Countries.objects.get(country=country)
            serialize_contry = Countries_Serializer(get_country)
            contry_id=serialize_contry.data['id']
            all_states= States.objects.filter(country=contry_id)
            serializer = States_Serializer(all_states , many=True)
            get_all_states=serializer.data
            print("get all states retrived..")

        except Exception as e:
            print(e)
            get_all_states=[]
        return Response(get_all_states, status=status.HTTP_200_OK)


# This def used for all cities retrived from db for requsted country and states.
class All_cities(APIView):
    def get(self,request,con,state):
        try:
            get_states= States.objects.get(state=state)
            serialize_states = States_Serializer(get_states)
            state_id=serialize_states.data['id']
            all_cities= Cities.objects.filter(state=state_id)
            serializer = Cities_Serializer(all_cities , many=True)
            get_all_cities=serializer.data
            print("get all cities retrived..")
        except Exception as e:
            print(e)
            get_all_cities=[]

        return Response(get_all_cities, status=status.HTTP_200_OK)
    





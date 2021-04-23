from django.urls import path

from . import views

urlpatterns = [
    path('', views.list_campaigns),
    path('score', views.check_score),
]
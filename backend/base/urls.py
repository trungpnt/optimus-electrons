from django.urls import path
from . import views
from django.contrib import admin

from django.conf import settings
#from django-rest-framework.com
#to work with variables in the setings.py file
from django.conf.urls.static import static

urlpatterns = [
    path('',views.getRoutes, name="routes"),
    path('products',views.getProducts,name="products"),
    path('products/<str:id>/', views.getProductById, name="product"),
]
#need to tell backend/urls about our existence, to send the traffic here!

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)

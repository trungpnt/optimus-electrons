from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from base.models import Product, Review
from .serializers import ProductSerializer
# from .products import products

@api_view(['GET'])
# which takes a list of HTTP methods that your view should respond to.
#the 
# Create your views here.
def getRoutes(request):
    routes= [
        'abeoaf',
        'feiajfow',
        'feiwaf'
    ]
    return Response(routes)
    #Next, configure URLs to know when to trigger this view
    #because, we have multiple views

@api_view(['GET'])
def getProducts(request):
    products = Product.objects.all()
    serializer = ProductSerializer(products,many=True)#many True for serializing multiple objects rather than 1
    return Response(serializer.data)

@api_view(['GET'])
def getProductById(request, id):
    product = Product.objects.get(_id = id)
    serializer = ProductSerializer(product,many=False) 

    return Response(serializer.data)


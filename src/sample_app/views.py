from django.shortcuts import render




def index_view(request):
    return render(request, "pages/index.html", {})

def home_view(request):
    return render(request, "pages/home.html", {})
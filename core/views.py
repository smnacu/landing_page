from django.shortcuts import render


"""
Vistas del módulo `core`.

Este archivo está escrito de forma simple y legible. Solo contiene
dos vistas que renderizan plantillas estáticas.
"""


def landing_page(request):
    """Renderiza la página principal (landing)."""
    return render(request, 'landing.html')


def services_page(request):
    """Renderiza la página de servicios."""
    return render(request, 'services.html')
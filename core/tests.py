from django.test import TestCase, Client
from django.urls import reverse


class LandingPageTests(TestCase):
    """Tests para las páginas principales del sitio."""
    
    def setUp(self):
        """Configuración inicial para los tests."""
        self.client = Client()
    
    def test_landing_page_loads(self):
        """Test que verifica que la página principal carga correctamente."""
        response = self.client.get(reverse('landing'))
        self.assertEqual(response.status_code, 200)
        self.assertContains(response, 'Daruma')
        self.assertContains(response, 'Soluciones Tecnológicas')
    
    def test_services_page_loads(self):
        """Test que verifica que la página de servicios carga correctamente."""
        response = self.client.get(reverse('services'))
        self.assertEqual(response.status_code, 200)
        self.assertContains(response, 'Servicios')
    
    def test_landing_page_contains_navigation(self):
        """Test que verifica que la navegación está presente."""
        response = self.client.get(reverse('landing'))
        self.assertContains(response, 'Inicio')
        self.assertContains(response, 'Servicios')
    
    def test_teamviewer_download_link_present(self):
        """Test que verifica que el enlace de descarga de TeamViewer está presente."""
        response = self.client.get(reverse('landing'))
        self.assertContains(response, 'TeamViewer')
        self.assertContains(response, 'static/downloads/TeamViewerQS.exe')

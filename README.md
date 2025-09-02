# Daruma - Soluciones Tecnológicas Integrales

<p align="center">
  <img src="static/img/hero.svg" alt="Daruma Logo" width="200"/>
</p>

**Daruma** es una plataforma web profesional diseñada para brindar soluciones tecnológicas integrales a empresas argentinas. Ofrece soporte técnico especializado, gestión de infraestructura, desarrollo de software y asesoramiento personalizado.

![Landing Page Preview](https://github.com/user-attachments/assets/bd559670-ee54-4fd0-9820-ee0998ac0ad5)

## 🚀 Características Principales

- **Landing Page Profesional**: Diseño moderno y responsivo con tema oscuro
- **Soporte Técnico Inmediato**: Detección automática de sistema operativo y IP pública
- **TeamViewer Integration**: Descarga directa de TeamViewer QuickSupport
- **Navegación Intuitiva**: Secciones organizadas para servicios y asesoramiento
- **Interfaz Multiidioma**: Soporte para internacionalización (i18n)
- **Modo Claro/Oscuro**: Alternador de tema incluido

## 🛠️ Tecnologías Utilizadas

- **Backend**: Django 5.2.5
- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Base de Datos**: SQLite (desarrollo) / PostgreSQL (producción recomendada)
- **Estilizado**: CSS personalizado con variables CSS modernas
- **Íconos**: SVG personalizados y emojis

## 📋 Requisitos Previos

- Python 3.8+ 
- pip (gestor de paquetes de Python)
- Git

## ⚙️ Instalación y Configuración

### 1. Clonar el Repositorio

```bash
git clone https://github.com/tu-usuario/daruma-page.git
cd daruma-page
```

### 2. Crear Entorno Virtual

#### En Windows (PowerShell):
```powershell
python -m venv venv
.\venv\Scripts\Activate.ps1
```

#### En macOS/Linux:
```bash
python3 -m venv venv
source venv/bin/activate
```

### 3. Instalar Dependencias

```bash
pip install -r requirements.txt
```

### 4. Configurar Base de Datos

```bash
python manage.py migrate
```

### 5. (Opcional) Crear Superusuario

```bash
python manage.py createsuperuser
```

### 6. Ejecutar Servidor de Desarrollo

```bash
python manage.py runserver
```

La aplicación estará disponible en: `http://localhost:8000`

## 📁 Estructura del Proyecto

```
daruma-page/
├── daruma/                 # Configuración principal de Django
│   ├── settings.py        # Configuraciones del proyecto
│   ├── urls.py           # URLs principales
│   ├── wsgi.py           # Configuración WSGI
│   └── asgi.py           # Configuración ASGI
├── core/                   # Aplicación principal
│   ├── views.py          # Vistas de la aplicación
│   ├── urls.py           # URLs de la app core
│   └── models.py         # Modelos (actualmente vacío)
├── templates/              # Plantillas HTML
│   ├── base.html         # Plantilla base
│   ├── landing.html      # Página principal
│   └── services.html     # Página de servicios
├── static/                 # Archivos estáticos
│   ├── css/
│   │   └── theme.css     # Estilos principales
│   ├── js/
│   │   ├── main.js       # JavaScript principal
│   │   ├── support.js    # Funcionalidad de soporte
│   │   └── carousel.js   # Componente carousel
│   ├── img/
│   │   ├── hero.svg      # Imagen hero
│   │   └── favicon.svg   # Favicon
│   └── downloads/
│       ├── TeamViewerQS.exe
│       └── README.txt
├── requirements.txt        # Dependencias de Python
└── manage.py              # Script de gestión de Django
```

## 🔧 Configuración Avanzada

### Variables de Entorno

Para producción, crea un archivo `.env` con:

```env
SECRET_KEY=tu-clave-secreta-super-segura
DEBUG=False
ALLOWED_HOSTS=tu-dominio.com,www.tu-dominio.com
DATABASE_URL=postgres://usuario:contraseña@host:puerto/database
```

### Configuración de Archivos Estáticos

Para producción, añade a `settings.py`:

```python
STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')
STATIC_URL = '/static/'

# Para archivos media si planeas subirlos
MEDIA_ROOT = os.path.join(BASE_DIR, 'media')
MEDIA_URL = '/media/'
```

### Colección de Archivos Estáticos

```bash
python manage.py collectstatic
```

## 🌐 Funcionalidades Específicas

### TeamViewer QuickSupport

El sistema incluye descarga directa de TeamViewer QuickSupport. El archivo debe ubicarse en:
```
static/downloads/TeamViewerQS.exe
```

### Detección de Sistema Operativo e IP

- **Sistema Operativo**: Detectado automáticamente via JavaScript
- **IP Pública**: Obtenida mediante `https://api.ipify.org?format=json`

### Alternador de Tema

El sitio incluye un alternador entre modo claro y oscuro, implementado con CSS variables y localStorage.

## 🚀 Despliegue en Producción

### 1. Configuraciones de Seguridad

```python
# En daruma/settings.py
DEBUG = False
SECRET_KEY = 'tu-clave-secreta-desde-variable-entorno'
ALLOWED_HOSTS = ['tu-dominio.com', 'www.tu-dominio.com']

# Configuraciones adicionales de seguridad
SECURE_BROWSER_XSS_FILTER = True
SECURE_CONTENT_TYPE_NOSNIFF = True
X_FRAME_OPTIONS = 'DENY'
```

### 2. Base de Datos para Producción

```python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'daruma_db',
        'USER': 'daruma_user',
        'PASSWORD': 'password',
        'HOST': 'localhost',
        'PORT': '5432',
    }
}
```

### 3. Servidor Web

Recomendamos usar **Gunicorn** con **Nginx**:

```bash
pip install gunicorn
gunicorn daruma.wsgi:application --bind 0.0.0.0:8000
```

## 🧪 Testing

### Ejecutar Tests

```bash
python manage.py test
```

### Verificar Configuración

```bash
python manage.py check
python manage.py check --deploy  # Para verificaciones de producción
```

## 📱 Responsividad

El diseño es completamente responsivo y optimizado para:
- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px  
- **Mobile**: 320px - 767px

## 🔒 Seguridad

### Recomendaciones Implementadas

- ✅ CSRF Protection habilitado
- ✅ XSS Protection
- ✅ Secure headers configurados
- ✅ DEBUG=False para producción
- ⚠️ **TODO**: Mover SECRET_KEY a variables de entorno

### Recomendaciones Adicionales

- Implementar HTTPS
- Configurar HSTS headers
- Usar variables de entorno para datos sensibles
- Implementar rate limiting
- Configurar logging apropiado

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/nueva-caracteristica`)
3. Commit tus cambios (`git commit -am 'Añadir nueva característica'`)
4. Push a la rama (`git push origin feature/nueva-caracteristica`)
5. Abre un Pull Request

## 📞 Soporte

Para soporte técnico o consultas sobre el proyecto:

- **Email**: contacto@daruma.com.ar
- **Sitio Web**: [www.daruma.com.ar](https://www.daruma.com.ar)
- **Repositorio**: [GitHub Issues](https://github.com/tu-usuario/daruma-page/issues)

## 📝 Próximos Pasos Recomendados

- [ ] Implementar formularios de contacto
- [ ] Añadir sistema de tickets de soporte
- [ ] Integrar CMS para gestión de contenido
- [ ] Implementar autenticación de usuarios
- [ ] Añadir panel de administración personalizado
- [ ] Integrar analytics y métricas
- [ ] Optimizar SEO y metadatos

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

---

<p align="center">
  <strong>© 2025 Daruma - Soluciones Tecnológicas Integrales</strong><br>
  Desarrollado con ❤️ para empresas argentinas
</p>
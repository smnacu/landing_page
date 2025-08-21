Proyecto: landing_page

Instrucciones rápidas para ejecutar en Windows (PowerShell):

1. Crear y activar virtualenv (si no existe):
   python -m venv venv
   .\venv\Scripts\Activate.ps1

2. Instalar dependencias (si tienes requirements):
   pip install -r requirements.txt
   # si no existe requirements.txt, al menos instala Django:
   pip install django

3. Aplicar migraciones:
   python manage.py migrate

4. Ejecutar servidor de desarrollo:
   python manage.py runserver

Notas:
- DEBUG está activado para desarrollo (daruma/settings.py). Cambia a False para producción.
- .gitignore fue añadido para evitar seguimiento de `venv/`, `__pycache__` y `db.sqlite3`.

Colocar TeamViewer QuickSupport
--------------------------------
Para que el enlace "Descargar TeamViewer QuickSupport" funcione, coloca el ejecutable en:

   static/downloads/TeamViewerQS.exe

Si no quieres almacenar el binario en el repositorio, puedes colocar el instalador en una carpeta fuera del repo
y actualizar el enlace en `templates/landing.html` apuntando a la URL pública.

Funcionalidad Soporte (SO e IP)
-------------------------------
La sección de soporte incluye botones que muestran el sistema operativo detectado por el navegador y la IP pública.
La IP se obtiene desde el servicio público `https://api.ipify.org?format=json` (sin autenticación). Si necesitas
una solución sin llamadas a servicios externos, hay que implementar un endpoint en tu backend que devuelva la IP.

Estructura y próximos pasos para el MVP
--------------------------------------
- `templates/` - HTML principal (base, landing, services).
- `static/` - CSS, JS y assets (añadidos hero.svg y favicon.svg)
- `core/` - app con vistas simples.

Próximos pasos recomendados para cumplir el MVP:
1. Añadir formularios de contacto / ticket para soporte.
2. Implementar autenticación si se requiere panel de cliente.
3. Añadir pruebas básicas (smoke test de rutas).

/*
    static/js/main.js
    -----------------
    Este script contiene la lógica compartida en todo el sitio.
    - Controla el menú de navegación móvil.
*/
document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.getElementById('nav-toggle');
    const mainNav = document.getElementById('main-navigation');

    if (navToggle && mainNav) {
        navToggle.addEventListener('click', () => {
            const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
            navToggle.setAttribute('aria-expanded', !isExpanded);
            mainNav.toggleAttribute('data-visible');
        });
    }
});
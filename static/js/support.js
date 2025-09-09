// support.js - detecta sistema operativo del usuario y obtiene IP pública

function detectOS() {
  const userAgent = navigator.userAgent || navigator.platform || 'unknown';
  const ua = userAgent.toLowerCase();
  if (ua.indexOf('windows') !== -1) return 'Windows';
  if (ua.indexOf('mac') !== -1) return 'macOS';
  if (ua.indexOf('linux') !== -1) return 'Linux';
  if (/iphone|ipad|ipod/.test(ua)) return 'iOS';
  if (/android/.test(ua)) return 'Android';
  return 'Desconocido';
}

async function getPublicIP() {
  try {
    const res = await fetch('https://api.ipify.org?format=json');
    const data = await res.json();
    return data.ip;
  } catch (e) {
    return 'No disponible';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const osButton = document.getElementById('show-os');
  const ipButton = document.getElementById('show-ip');
  const osTarget = document.getElementById('user-os');
  const ipTarget = document.getElementById('user-ip');

  if (osButton && osTarget) {
    osButton.addEventListener('click', () => {
      osTarget.textContent = detectOS();
    });
  }

  if (ipButton && ipTarget) {
    ipButton.addEventListener('click', async () => {
      ipTarget.textContent = 'Consultando...';
      const ip = await getPublicIP();
      ipTarget.textContent = ip;
    });
  }
});

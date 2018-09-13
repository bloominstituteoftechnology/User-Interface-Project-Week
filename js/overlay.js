const overlay = document.querySelector('.overlay');

const openOverlayIcon = document.querySelector('.overlay-open-icon');
openOverlayIcon.style.cursor = 'pointer';
openOverlayIcon.addEventListener('click', () => openOverlay());

const closeOverlayIcon = document.querySelector('.overlay-close-icon');
closeOverlayIcon.style.cursor = 'pointer';
closeOverlayIcon.addEventListener('click', () => closeOverlay());

function openOverlay() {
  overlay.style.height = '100%';
}

function closeOverlay() {
  overlay.style.height = '0%';
}
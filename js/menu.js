let menuButton = document.querySelector('.menu-button');
let nav = document.querySelector('nav');

function toggleMenu() {
    nav.classList.toggle('main-nav-expanded');
}

menuButton.addEventListener('click', toggleMenu);

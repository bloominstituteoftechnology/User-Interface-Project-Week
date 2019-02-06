//Mobile Menu

function toggleMenu() {
    menu.classList.toggle('menu-open');
}

const menu = document.querySelector('.mobile-menu');
const menuButton = document.querySelector('.mobile-menu-extras');
const close = document.querySelector('.close');

menuButton.addEventListener('click', toggleMenu);
close.addEventListener('click', toggleMenu);
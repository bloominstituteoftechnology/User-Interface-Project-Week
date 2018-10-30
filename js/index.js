// JS goes here

// Expand Navigation

const toggleMenu = () => {
    menu.classList.toggle('open-menu');
    closeIcon.style.display = 'block';
    menuIcon.style.display = 'none';
}

const closeMenu = () => {
    menu.classList.toggle('open-menu');
    closeIcon.style.display = 'none';
    menuIcon.style.display = 'block';
}

const menu = document.querySelector('nav');
const closeIcon = document.querySelector('.expanded');
const menuIcon = document.querySelector('.menu-icon');

menuIcon.addEventListener('click', toggleMenu);
closeIcon.addEventListener('click', closeMenu);
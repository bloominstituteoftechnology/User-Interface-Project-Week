const toggleMenu = () => {
    menu.classList.toggle('menu--open');
    menuButton.classList.toggle('hide-hamburger');
}


const menu = document.querySelector('.menu-overlay');
const menuButton = document.querySelector('.menu-button');
menuButton.addEventListener('click', toggleMenu);
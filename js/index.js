const toggleMenu = () => {
    menu.classList.toggle('menu--open');
    menuButton.style.display = 'none';
    menuX.style.display = 'block';
}

const toggleX = () => {
    menu.classList.toggle('menu--closed');
    menuButton.style.display = 'block';
    menuX.style.display = 'none';
}

const menu = document.querySelector('.menu');

const menuButton = document.querySelector('.menu-button');

const menuX = document.querySelector('.menu-x');

menuButton.addEventListener('click', () => toggleMenu());

menuX.addEventListener('click', () => toggleX());
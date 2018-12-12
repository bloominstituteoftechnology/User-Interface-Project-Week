const toggleMenu = () => {
    menu.style.display = 'block';
    menuButton.style.display = 'none';
    menuX.style.display = 'block'; 
}   

const toggleMenuX = () => {
    menu.style.display = 'none';
    menuX.style.display = 'none';
    menuButton.style.display = 'block'; 
}

const menu = document.querySelector('.menu');

const menuButton = document.querySelector('.menu-button');

const menuX = document.querySelector('.menu-x');

menuButton.addEventListener('click', () => toggleMenu());

menuX.addEventListener('click', () => toggleMenuX());
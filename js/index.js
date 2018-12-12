const toggleMenu = () => {
    menu.classList.toggle('menu--open');
    //menuX.classList.toggle('button--open');
    menuButton.style.display = 'none';
    menuX.style.display = 'block';  
}

const toggleX = () => {
    menu.classList.toggle('menu--closed');
    //menuButton.classList.toggle('button--closed');
    menuX.style.display = 'none';
    menuButton.style.display = 'block'; 
}

const menu = document.querySelector('.menu');

const menuButton = document.querySelector('.menu-button');

const menuX = document.querySelector('.menu-x');

menuButton.addEventListener('click', () => toggleMenu());

menuX.addEventListener('click', () => toggleX());
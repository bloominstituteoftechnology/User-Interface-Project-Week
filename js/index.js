// JS goes here

const openMenu = () => {
    if (menu.style.display = 'none') {
        menu.style.display = 'block';
        burger.src = 'img/nav-hamburger-close.png';
        burger.style.zIndex = '4';
    } else if (menu.style.display = 'block') {
        menu.style.display = 'none';
        burger.src = 'img/nav-hamburger.png';
        burger.style.zIndex = '1';
    }
}

const menu = document.querySelector('.menu');
const burger = document.querySelector('.burger');

burger.addEventListener('click', openMenu);
// JS goes here

//Expanded Nav
const menu = document.querySelector('.menu')
const nav = document.querySelector('.nav')

menu.addEventListener('click', () => {
    nav.classList.add('full-menu');
    menu.src = "img/nav-hamburger-close.png";
});

const close = document.querySelector('.close')

close.addEventListener('click', () => {
    nav.classList.remove('full-menu');
    menu.src = "img/nav-hamburger.png"
});


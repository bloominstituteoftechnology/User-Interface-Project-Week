// JS goes here

const menu = document.querySelector('.menu')
const nav = document.querySelector('.nav')

menu.addEventListener('click', () => {
    nav.classList.add('full-menu');
});

menu.addEventListener('click', () => {
    menu.src = "img/nav-hamburger-close.png";
});

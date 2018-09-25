// JS goes here
let menuButton = document.querySelector('.nav-bar img');
menuButton.addEventListener('click', () => {
   menu.classList.toggle('nav-bar-active');
   menuButton.src.includes('img/nav-hamburger.png') ? menuButton.src = 'img/nav-hamburger-close.png' : menuButton.src = 'img/nav-hamburger.png';
})
let menu = document.querySelector('.nav-bar');
const toggleMenu = () => {
    menu.classList.toggle('menu--open');
}

const menuBtn = document.querySelector('.menu-button');
const menu = document.querySelector('.menu');
const menuBtnClose = document.querySelector('.menu-button-close');


const menuOpen = () => {
    menu.classList.toggle('menu--open');
    menuBtn.classList.toggle('hamburger-hide');
    menuBtnClose.classList.toggle('menu-btn-close-hide');
}

const menuClose = () => {
    menu.classList.toggle('menu--open');
    menuBtn.classList.toggle('hamburger-hide');
    menuBtnClose.classList.toggle('menu-btn-close-hide');
}

menuBtn.addEventListener('click', event => {
    menuOpen();
});

menuBtnClose.addEventListener('click', event => {
    menuClose();
});
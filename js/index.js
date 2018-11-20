// Menu code
const menuBtn = document.querySelector('.menu-button');
const menu = document.querySelector('.menu');
const menuBtnClose = document.querySelector('.menu-button-close');


const menuToggle = () => {
    menu.classList.toggle('menu--open');
    menuBtn.classList.toggle('hamburger-hide');
    menuBtnClose.classList.toggle('menu-btn-close-hide');
}

menuBtn.addEventListener('click', event => {
    menuToggle();
});

menuBtnClose.addEventListener('click', event => {
    menuToggle();
}); // end Menu code
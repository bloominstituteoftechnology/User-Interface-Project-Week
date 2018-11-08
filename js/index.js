// JS goes here
const menu = document.querySelector('.menu-2');
const hamburger = document.querySelector('.hamburger');
const hamburgerOpen = document.querySelector('#menu-button-open');
const hamburgerClose = document.querySelector('#menu-button-close');
const navExpand = document.querySelector('nav');

hamburger.addEventListener('click', function() {
    menu.classList.toggle('menu-open')
    menu.classList.toggle('hide')
    menu.classList.toggle('menu');
    navExpand.classList.toggle('nav-expand');
    hamburgerOpen.classList.toggle('hide');
    hamburgerClose.classList.toggle('hide');
});
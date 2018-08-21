// JS goes here

const menu = document.querySelector('.menu');

let image_tracker = 'f';
function openMenu() {
    const burger = document.querySelector('burger');
    if (image_tracker = 'f') {
        burger.src = 'img/nav-hamburger-close.png';
        image_tracker = 't';
    }
    else {
        burger.src = 'img/nav-hamburger.png';
        image_tracker = 'f';
    }
}

burger.addEventListener('click', openMenu);
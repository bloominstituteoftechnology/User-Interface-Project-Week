// JS goes here

let overlay = document.querySelector('.overlay');
let navBurger = document.querySelector('.menu-burger');
let navCloseBtn = document.querySelector('.menu-close');

function openNav() {
    overlay.style.display="block";
    console.log('burger clicked');
}

function closeNav() {
    overlay.style.display="none";
    console.log('x clicked');
}

navBurger.addEventListener('click', () => openNav());
navCloseBtn.addEventListener('click', () => closeNav());
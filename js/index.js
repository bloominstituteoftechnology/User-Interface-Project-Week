// JS goes here

let overlay = document.querySelector('.overlay');
let navBurger = document.querySelector('.menu-burger');
let navCloseBtn = document.querySelector('.menu-close');

function openNav() {
    overlay.style.display="block";
}

function closeNav() {
    overlay.style.display="none";
}

navBurger.addEventListener('click', () => openNav());
navCloseBtn.addEventListener('click', () => closeNav());
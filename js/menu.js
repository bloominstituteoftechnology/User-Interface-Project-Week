// menu.js

const toggleMenu = () => {
    navigation.classList.toggle('navigation--open');
    hamburgerOpen.classList.toggle('hamburger--open');
}

const toggleClose = () => {
    navigation.classList.toggle('navigation--open');
    hamburgerOpen.classList.toggle('hamburger--open');
}



let navigation = document.querySelector('.navigation');

let hamburger = document.querySelector('.hamburger');

let hamburgerClick = hamburger.addEventListener('click', toggleMenu);

let hamburgerOpen = document.querySelector('.hamburger-close');

let hamburgerClickClose = hamburgerOpen.addEventListener('click', toggleClose);


const toggleMenu = () => {
    overlay.classList.toggle('overlay--open');
}

const hideMenu = () => {
    hiddenNav.classList.toggle('nav--close');
}

const overlay = document.querySelector('.overlay');
const hamburgerButton = document.querySelector('.hamburger-button');
const closedHamburgerButton = document.querySelector('.hamburger-close-button');
const hiddenNav = document.querySelector('.hidden-nav');

closedHamburgerButton.addEventListener('click', toggleMenu);
closedHamburgerButton.addEventListener('click', hideMenu);

hamburgerButton.addEventListener('click', toggleMenu);
hamburgerButton.addEventListener('click', hideMenu);

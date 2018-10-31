// Navigation
// DOM References
const navOpen = document.querySelector('#nav-open');

const navClose = document.querySelector('#nav-close');

const nav = document.querySelector('nav');

// Callback Methods
const hideMenu = () => {
    navOpen.classList.remove('hide-nav');
    nav.classList.add('hide-nav');
    navClose.classList.add('hide-nav');
}

const showMenu = () => {
    nav.classList.remove('hide-nav');
    navClose.classList.remove('hide-nav');
    navOpen.classList.add('hide-nav');
    navClose.style.cursor = 'pointer';
}

// Event Listeners
navOpen.addEventListener('click', showMenu);

navClose.addEventListener('click', hideMenu);
// JS goes here


// ====================== NAVIGATION 

// VARIABLES
const body = document.querySelector('body');

const hamburgerMenu = document.querySelector('.hamburger-menu');
const closeMenu = document.querySelector('.close-menu');
const nav = document.querySelector('nav');
const navBar = document.querySelector('.top-nav');

// EVENT LISTENERS
hamburgerMenu.addEventListener('click', () => toggleMenu())
closeMenu.addEventListener('click', () => toggleMenu());


// CALLBACK FUNCTIONS
toggleMenu = function () {
  hamburgerMenu.classList.toggle('hide')
  closeMenu.classList.toggle('hide');
  nav.classList.toggle('open');
  body.classList.toggle('overflow-hidden');
}
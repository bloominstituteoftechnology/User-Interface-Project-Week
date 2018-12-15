const toggleHamburger = e => {
  hamburger.classList.toggle('hamburger--open');
  closeHamburger.classList.toggle('hamburger--open');
}

const toggleMenu = (e) => {
  menu.classList.toggle('menu--open');
}

const menu = document.querySelector('.menu');
const hamburger = document.querySelector('.nav-hamburger');
const closeHamburger = document.querySelector('.nav-hamburger-close');

hamburger.addEventListener('click', toggleMenu);

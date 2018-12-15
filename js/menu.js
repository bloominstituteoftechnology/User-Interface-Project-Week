const toggleMenu = (e) => {
  menu.classList.toggle('menu--open');
}

const menu = document.querySelector('.menu');
const hamburger = document.querySelector('.nav-hamburger');

hamburger.addEventListener('click', toggleMenu);

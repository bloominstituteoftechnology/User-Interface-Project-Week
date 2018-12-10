const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');
const navContent = document.querySelector('.menu-content');

hamburger.addEventListener('click', _ => {
  hamburger.classList.toggle('hamburger-close');
  nav.classList.toggle('nav-full');
  navContent.classList.toggle('show-menu');
});
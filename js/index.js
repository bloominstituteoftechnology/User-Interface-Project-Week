// JS goes here
const toggleMenu = () => {
    menu.classList.toggle('menu--open'); 
  }
  const menu = document.querySelector('.menu');
  const menuButton = document.querySelector('.nav-button');
  menuButton.addEventListener('click', toggleMenu);

 const navClose = document.querySelector('.nav-close');
 navClose.addEventListener('click', toggleMenu);
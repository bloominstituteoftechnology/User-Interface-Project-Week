// JS goes here
const toggleMenu = () => { 
    menu.classList.toggle('menu--open')
  }

    const menu = document.querySelector('.menu-content');

    const menuButton = document.querySelector('.hamburger-img');

menuButton.addEventListener('click',event => {
    toggleMenu();
  });
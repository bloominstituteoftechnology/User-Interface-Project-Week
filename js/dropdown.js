
// ref to .menu class
const menu = document.querySelector('.menu');


const toggleDropDown = () => {
  menu.classList.toggle('menu--open');

};

const menuButton = document.querySelector('.hamnburger-button');

menuButton.addEventListener('click', toggleDropDown);
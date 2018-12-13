
//---------------NAV MENU---------------------

const headerText = document.querySelector(".header h1");
const buttonImg = document.querySelector(".menu-button");
const buttonClose = document.querySelector(".menu-button-close");

const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence.
  menu.classList.toggle('menu--open');
  headerText.classList.toggle('opacity');
  buttonImg.classList.toggle('button-close');
  buttonClose.classList.toggle('button-open');
  buttonClose.classList.toggle('menu-button-close');
}

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu');
// create a reference to the ".menu-button" class

const menuButton = document.querySelector('.menu-button');
// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener('click', (e) => {
  toggleMenu();
});

buttonClose.addEventListener('click', (e) => {
  toggleMenu();
});



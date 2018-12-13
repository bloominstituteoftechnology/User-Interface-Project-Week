
//---------------NAV MENU---------------------

const headerText = document.querySelector(".header h1");
const buttonImg = document.querySelector(".menu-button");
const buttonClose = document.querySelector(".menu-button-close");

const toggleMenu = () => {
  menu.classList.toggle('menu--open');
  headerText.classList.toggle('opacity');
  buttonImg.classList.toggle('button-close');
  buttonClose.classList.toggle('button-open');
  buttonClose.classList.toggle('menu-button-close');
}

const menu = document.querySelector('.menu');

const menuButton = document.querySelector('.menu-button');

menuButton.addEventListener('click', (e) => {
  toggleMenu();
});

buttonClose.addEventListener('click', (e) => {
  toggleMenu();
});



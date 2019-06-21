var delayInMilliseconds = 3000;

const toggleMenu = () => {
  menu.classList.toggle('menu--open');
  
};

let toggle = false;

const toggleimg = () => {
  if (toggle === false) {
    menuButton.src = 'img/nav-hamburger-close.png';
    toggle = true;
  } else if (toggle === true) {
    menuButton.src = 'img/nav-hamburger.png';
    toggle = false;
  }
};

const menu = document.querySelector('.menu');

const menuButton = document.querySelector('.hamburger');

menuButton.addEventListener('click', e => {
  toggleMenu();
  toggleimg();
});


const toggleMenu = () => {
  menu.classList.toggle('menu--open');
};

const menu = 
document.querySelector('.menu');

const menuButton = 
document.querySelector('.menu-button');

const menuCloseButton = 
document.querySelector('.menu-close-button');


menuButton.addEventListener('click', function(e) {
  e.target = toggleMenu();
});

menuCloseButton.addEventListener('click', function(e) {
  e.target = toggleMenu();
});
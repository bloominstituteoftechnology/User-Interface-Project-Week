// JS goes here
//toggles the hamB icon
const toggleMenu = () => {
   menu.classList.toggle('menu--open');   
   
};

const menu = document.querySelector('.menu');
const hamBimg = document.querySelector('.hamB-img');
const closeBtn = document.querySelector('#menu__close');
hamBimg.addEventListener('click', toggleMenu, false);

closeBtn.addEventListener('click', () => {
  toggleMenu();
}, false);


//Tabs

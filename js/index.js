// JS goes here

//MENU 


const menu = document.querySelector('.menu');
const menuButton = document.querySelector('.menu-button');
const menuClose = document.querySelector('.menu-close');
 
menuButton.addEventListener('click', () => {
  menu.classList.toggle('menu--open');
  menuButton.style.display = 'none';
  menuClose.style.display = 'block';
});

menuClose.addEventListener('click', () => {
  menu.classList.toggle('menu--open');
  menuButton.style.display = 'block';
  menuClose.style.display = 'none';
});  


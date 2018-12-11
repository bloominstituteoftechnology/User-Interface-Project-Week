// JS goes here


//===== NAV Menu 

const toggleMenu = () => {
  menu.classList.toggle('menu--open');
  menuBtnClose.classList.toggle("menu-btn-close");
  menuBtn.classList.toggle('menu-btn-close');
  
}

const menu = document.querySelector('.menu');

const menuBtn = document.querySelector('.menu-btn');
const menuBtnClose = document.querySelector('.menu-btn-close');


menuBtn.addEventListener('click', () => {
  toggleMenu();
  
})

menuBtnClose.addEventListener('click', () => {
  toggleMenu();

})
const menu = document.querySelector('.nav');
const menuClick = document.querySelectorAll('.nav__img')
const openBtn = document.querySelector('.nav__img--open');
const closeBtn = document.querySelector('.nav__img--close');
const navMenu = document.querySelector('.nav__menu');

menuClick.forEach(item => item.addEventListener('click', function(){ 
  openBtn.classList.toggle('btn-toggle');
  closeBtn.classList.toggle('btn-toggle');
  menu.classList.toggle('full-screen');
  navMenu.classList.toggle('menu-toggle');
}))
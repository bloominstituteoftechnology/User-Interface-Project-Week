// JS goes here

const menu = document.querySelector('.navbar');
const openBtn = document.querySelector('.navbar-hamburger');
const closeBtn = document.querySelector('.navbar-close');
const extNavBar = document.querySelector('.navbar-menu-content');

openBtn.addEventListener('click', function(){
  console.log('click worked!');
  
  openBtn.classList.toggle('navbar-toggle');
  closeBtn.classList.toggle('navbar-toggle');
  extNavBar.classList.toggle('menu-toggle');
  
})

closeBtn.addEventListener('click', function() {
    openBtn.classList.toggle('navbar-toggle');
  closeBtn.classList.toggle('navbar-toggle');
  extNavBar.classList.toggle('menu-toggle');
})
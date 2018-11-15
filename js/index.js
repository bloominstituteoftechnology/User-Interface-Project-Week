// JS goes here

const navBar = document.querySelector('.extra');
const hamBurger = document.querySelector('.hamburger');
const closeMenu = document.querySelector('.close-menu');


hamBurger.addEventListener('click', function(){
  navBar.classList.toggle("expanded");
})

closeMenu.addEventListener('click', function(){
  navBar.classList.toggle("expanded");
})

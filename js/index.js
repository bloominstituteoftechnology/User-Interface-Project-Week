// JS goes here

const exit = document.querySelector('.exit');
const hamBurger = document.querySelector('.hamburger');
const expandedMenu = document.querySelector('.expanded-menu');
hamBurger.addEventListener('click', function(){
  exit.classList.toggle("close");
  hamBurger.classList.toggle("close");
  expandedMenu.classList.toggle("block");
})

exit.addEventListener('click', function(){
  exit.classList.toggle("close");
  hamBurger.classList.toggle("close");
  expandedMenu.classList.toggle("block");
})

// JS goes here

// toggle nav
const navButton = document.getElementById('menu-button');
const navBar = document.querySelector('.menu');
navButton.addEventListener('click', function(event) {
  navBar.parentNode.classList.toggle('nav-expanded');
  navBar.classList.toggle('menu-show');
})
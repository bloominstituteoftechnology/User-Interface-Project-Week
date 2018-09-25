// JS goes here

// toggle nav
const getRestOfStrAfter = function(str, search) {
  return str.substring(str.indexOf(search));
}   

const navButton = document.getElementById('menu-button');
const navBar = document.querySelector('.menu');
let imgStates = {
  'on': 'img/nav-hamburger-close.png',
  'off': 'img/nav-hamburger.png'

}
navButton.addEventListener('click', function(event) {
  navButton.dataset.state = navButton.dataset.state === 'off' ? 'on' : 'off';
  navButton.src = imgStates[navButton.dataset.state];
  navBar.parentNode.classList.toggle('nav-expanded');
  navBar.classList.toggle('menu-show');

  
})
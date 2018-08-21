// JS goes here

// *** HOME PAGE JS ***
console.log('hi');
const hamburger = document.querySelector('.nav-burger');
const nav = document.querySelector('#nav');
const navMenuContent = document.querySelector('.home-nav-dropdown');

hamburger.addEventListener('click', () => {
  console.log('hamburger');
  nav.classList.toggle('expand-nav-500');
  nav.style = "align-items: flex-start";
  navMenuContent.classList.toggle('expand-nav-500-menu');
  navMenuContent.classList.toggle('hide');
  hamburger.setAttribute("src", '../img/nav-hamburger-close.png');
  if(!nav.classList.contains('expand-nav-500')){
    hamburger.setAttribute("src", '../img/nav-hamburger.png');
  }
});
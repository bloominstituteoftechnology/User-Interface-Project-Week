// JS goes here

// *** Nav JS ***
const hamburger = document.querySelector('.nav-burger');
const nav = document.querySelector('#nav');
const navMenuContent = document.querySelector('.home-nav-dropdown');

hamburger.addEventListener('click', () => {
  nav.classList.toggle('expand-nav-500');
  TweenMax.from('.expand-nav-500', 2, {top: -500, opacity: 0});
  TweenMax.to('.expand-nav-500', 2, {top: 0, opacity: .9});
  nav.style = "align-items: flex-start";
  navMenuContent.classList.toggle('expand-nav-500-menu');
  navMenuContent.classList.toggle('hide');
  hamburger.setAttribute("src", '../img/nav-hamburger-close.png');
  if(!nav.classList.contains('expand-nav-500')){
    hamburger.setAttribute("src", '../img/nav-hamburger.png');
  }
});
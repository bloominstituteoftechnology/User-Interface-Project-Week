// JS goes here

// *** Nav JS ***
const hamburger = document.querySelector('.nav-burger');
const nav = document.querySelector('#nav');
const navMenuContent = document.querySelector('.home-nav-dropdown');

hamburger.addEventListener('click', () => {

  if(nav.classList.contains('expand-nav-500')){
    console.log('hi')
    TweenMax.from('.expand-nav-500', 2, {top: 100});
    TweenMax.to('.expand-nav-500', 2, {top: 0});
    TweenMax.from('.expand-nav-500', 2, {height: "100%"});
    TweenMax.to('.expand-nav-500', 2, {height: "5%"});
  }
  
  if(navMenuContent.classList.contains('expand-nav-500-menu')){
    console.log('yes');
    TweenMax.to('.expand-nav-500', 2, {top: 100, opacity: 1});
    TweenMax.from('.expand-nav-500', 2, {top: 0, opacity: 0});
  }

  nav.classList.toggle('expand-nav-500');
  TweenMax.from('.expand-nav-500', 2, {top: 0, opacity: 0});
  TweenMax.to('.expand-nav-500', 2, {top: 100, opacity: 1});
  nav.style = "align-items: flex-start";
  navMenuContent.classList.toggle('expand-nav-500-menu');
  TweenMax.from('.expand-nav-500', 2, {top: 0, opacity: 0});
  TweenMax.to('.expand-nav-500', 2, {top: 100, opacity: 1});
  navMenuContent.classList.toggle('hide');
  hamburger.setAttribute("src", '../img/nav-hamburger-close.png');
  if(!nav.classList.contains('expand-nav-500')){
    hamburger.setAttribute("src", '../img/nav-hamburger.png');
  }
});
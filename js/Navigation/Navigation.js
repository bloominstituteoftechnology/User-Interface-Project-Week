const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');
const navContent = document.querySelector('.menu-content');
const navItems = document.querySelector('.menu-content a');

hamburger.addEventListener('click', _ => {
  hamburger.classList.toggle('hamburger-close');
  //nav.classList.toggle('nav-full');
  if(nav.style.height != '100vh') {
    TweenMax.to('nav', .6, {height: '100vh', backgroundColor: 'rgba(152, 164, 175, 0.877)'})
    navContent.classList.toggle('show-menu');
    TweenMax.from('.menu-content a', 1, {y: -500});
    TweenMax.staggerTo('.menu-content a', 1, {delay: .5, display: 'block', opacity: 1});
  } else {
    
    TweenMax.to('nav', .6, {height: 52, backgroundColor: '#98A4AF'})
    TweenMax.to('.menu-content a', .1, {opacity: 0, onComplete: _ => {navContent.classList.toggle('show-menu')}});
  }
});
// navigation bar JS
let hamburger = document.querySelector('.navigation img');
let navigation = document.querySelector('.navigation');
let nav = document.querySelector('.navigation nav');

hamburger.addEventListener('click', () => {
  navigation.classList.toggle('navigation-active');
  hamburger.src.includes('img/nav-hamburger.png') ? 
    (hamburger.src = 'img/nav-hamburger-close.png', TweenMax.from(navigation, 1, {opacity: 0})) : 
    hamburger.src = 'img/nav-hamburger.png';
})

// scrolling animations
ScrollReveal().reveal('.scroll1', {
  origin: 'left',
  duration: 1000,
  delay: 1000,
  distance: '300px',
})
ScrollReveal().reveal('.scroll2', {
  origin: 'right',
  duration: 1000,
  distance: '300px',
})
ScrollReveal().reveal('.top-article', {
  origin: 'left',
  duration: 1000,
  delay: 500,
  distance: '300px',
})
ScrollReveal().reveal('.mid-article', {
  origin: 'right',
  duration: 1000,
  delay: 500,
  distance: '300px',
})
ScrollReveal().reveal('.bottom-article', {
  origin: 'left',
  duration: 1000,
  delay: 500,
  distance: '300px',
})

TweenMax.staggerTo('.tabs-link', 1, {rotation:360}, 0.5);
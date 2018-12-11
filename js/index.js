//Nav Bar animation
TweenMax.from('nav', .6, {y:-100});
TweenMax.from('.logo', .6, {x:-20, opacity: 0, delay: .4});
TweenMax.from('.hamburger', .6, {x:20, opacity: 0, delay: .8});

//Header Animation
TweenMax.from('h1', 1, {x:50, opacity:0}, 0.3);

const slideDown = {
  distance: '150%',
  origin: 'top',
  opacity: '0',
  duration: 1000
};

const slideUp = {
  distance: '60%',
  origin: 'bottom',
  opacity: '0',
  duration: 1000
};

const slideRight = {
  distance: '10%',
  origin: 'left',
  opacity: '0',
  duration: 1000
};

const allH2 = Array.from(document.querySelectorAll('h2'));
const allP = document.querySelectorAll('p');
const learnMoreBtn = document.querySelectorAll('.learn-more-btn');
allH2.shift();

//scroll reveal events
ScrollReveal().reveal(allH2, slideDown)
ScrollReveal().reveal(allP, slideRight)
ScrollReveal().reveal(learnMoreBtn, slideUp)

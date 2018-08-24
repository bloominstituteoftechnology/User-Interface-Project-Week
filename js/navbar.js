//|==================
//|  Menu Animation  
//|==================
const toggleNavClosure = () => {
  let open = false;
  return () =>
  !open ? (
    hamburger.src = "img\\nav-hamburger-close.png",
    hamburger.classList.add('close'),
    navContainer.classList.toggle('flex'),
    nightMode.classList.toggle('flex'),
    TweenMax.fromTo( navContainer, .2, {height: '0vh'}, {height: '100vh'} ),
    TweenMax.fromTo( nav, .3, {y: -100, opacity: 0}, {y: 0, opacity: 1, delay: .1} ),
    TweenMax.fromTo( nightMode, .2, {opacity: 0}, {opacity: 1, delay: .2} ),
    open = true
  ) : (
    hamburger.src = "img\\nav-hamburger.png",
    hamburger.classList.remove('close'),
    TweenMax.fromTo( navContainer, .2, {height: '100vh'}, {height: '0vh', delay: .1} ),
    TweenMax.fromTo( nav, .1, {y: 0, opacity: 1}, {y: -25, opacity: 0} ),
    TweenMax.fromTo( nightMode, .2, {opacity: 1}, {opacity: 0} ),
    open = false,
    setTimeout( () => {navContainer.classList.toggle('flex'); nightMode.classList.toggle('flex')}, 300 )
  );
};

const navContainer = document.querySelector('.nav-container');
const nav = document.querySelector('nav');
const hamburger = document.querySelector('.hamburger');
let toggleNav = toggleNavClosure();

hamburger.addEventListener('click', toggleNav);

//|==============
//|  Night Mode  
//|==============
const toggleNightModeClosure = () => {
  let day = true;
  return () => {
  day ? (
    setTimeout( () => {nightMode.src = "img\\nav-day-mode.png"}, 400 ), day = false
    ) : (
    setTimeout( () => {nightMode.src = "img\\nav-night-mode.png"}, 400 ), day = true
  );
  document.querySelector('body').classList.toggle('dark');
  (document.querySelector('header').classList.toggle('header-dark'));
  (document.querySelector('footer').classList.toggle('footer-dark'));
  Array.from(document.querySelectorAll('p, h2:not(.project-square), h3, .button, label')).forEach(element => element.classList.toggle('light'));
  }
};

const nightMode = document.querySelector('.night-mode');
let toggleNightMode = toggleNightModeClosure();

nightMode.addEventListener('click', () => {toggleNightMode(); toggleNav()});
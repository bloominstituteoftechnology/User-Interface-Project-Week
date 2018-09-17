// JS goes here
const body = document.querySelector("body");

// check for body to load and then fade in
window.addEventListener("load", () => {
  TweenMax.fromTo(body, 2, {opacity:0},{opacity:1});
});

// check for navbar link clicks to change body opacity
let navbar = document.querySelector('.navbar');

let navbarLinks = navbar.querySelectorAll('a');

Array.from(navbarLinks).map((link) => {
  link.addEventListener('click', () => {
    TweenMax.fromTo(body, 3, {opacity:1},{opacity:0});
  });
});
// replace images if screen width is below 500px

const switchImages = (id, src) => {

  id = document.getElementById(id);

  screen.width < 501 ? id.setAttribute('src', src) : true;
}
// target the fa-bars
const bars = document.querySelector('.fa-bars');

// add click event to toggle navbar display
bars.addEventListener('click', () => {

  // get navbar and display it
  let nav = document.querySelector('.navbar');
  nav.style.display = 'flex';

// add tweenmax to slowly bring down nav
  TweenMax.to(nav,1,{opacity: 0.8});
  // hide bars
  bars.style.display = 'none';

  // show close;
  close.style.display = 'block';
});

// set up the close icon to close navbar when clicked
const close = document.querySelector('.close');
close.addEventListener('click', () => {

  // get navbar and hide it
  let nav = document.querySelector('.navbar');


  // add tweenmax to slowly bring down nav
  TweenMax.to(nav,0.5,{opacity: 0});

  // hide close
  close.style.display = 'none';

  // show hamburger
  bars.style.display = 'block';
});

const navToggler = document.querySelector('.nav-toggler');
const navExpand = document.querySelector('.navbar-expand');
const navbar = document.querySelector('.fixed-navbar');
const closeBtn = document.querySelector('.nav-toggler-close');

let animateToggle = TweenMax.fromTo(navExpand, 0.5, {opacity: 0}, {opacity: 1}).reverse();

function toggleNavMenu() {
  navExpand.classList.toggle('show-navbar-expand');
  navbar.classList.toggle('hide-navbar');

  if (!animateToggle.isActive()) {
    animateToggle.reversed(!animateToggle.reversed());
  }
}

navToggler.addEventListener('click', toggleNavMenu);
closeBtn.addEventListener('click', toggleNavMenu);

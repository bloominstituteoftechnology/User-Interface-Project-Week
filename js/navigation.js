const navToggler = document.querySelector('.nav-toggler');
const navExpand = document.querySelector('.navbar-expand');
const navbar = document.querySelector('.fixed-navbar');
const closeBtn = document.querySelector('.nav-toggler-close');

function toggleNavMenu() {
  navExpand.classList.toggle('show-navbar-expand');
  navbar.classList.toggle('hide-navbar');
}

navToggler.addEventListener('click', toggleNavMenu);
closeBtn.addEventListener('click', toggleNavMenu);

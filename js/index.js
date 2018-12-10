// JS goes here
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');
hamburger.addEventListener('click', function () {

  if (nav.classList.toggle('toggle')) {
    hamburger.src = "./img/nav-hamburger.png"
    window.style.overflow = hidden;
  } else {
    hamburger.src = "./img/nav-hamburger-close.png"
  }
})
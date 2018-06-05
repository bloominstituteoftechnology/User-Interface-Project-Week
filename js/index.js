// JS goes here
function menuToggle() {
  document.querySelector('.cta').toggle('.nav-expanded');
  document.querySelector('.menu').toggle('.menu-toggle');
}

document.querySelector.('.hamburger').addEventListener('click', (e) => {
  e.target.setAttribute('src', './img/nav-hamburger-close.png');
  menuToggle();
})

// document.body.addEventListener('wheel', function() {
//   console.log('Is listening');
//   document.querySelector('.custom-nav').classList.add('nav-scroll');
// });

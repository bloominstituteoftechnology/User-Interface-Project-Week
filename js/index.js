// JS goes here
function menuToggle() {
  document.querySelector('.cta').classList.toggle('nav-expanded');
  document.querySelector('.menu').classList.toggle('menu-toggle');
}

document.querySelector('.hamburger').addEventListener('click', (e) => {
  if (e.target.attributes.src.nodeValue === './img/nav-hamburger-close.png') {
    e.target.setAttribute('src', './img/nav-hamburger.png');
    menuToggle();
  } else {
  e.target.setAttribute('src', './img/nav-hamburger-close.png');
  menuToggle();
}
}) //Toggles menu

// document.body.addEventListener('wheel', function() {
//   console.log('Is listening');
//   document.querySelector('.custom-nav').classList.add('nav-scroll');
// });

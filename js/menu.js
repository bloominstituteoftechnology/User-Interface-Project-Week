// Menu code
const menuBtn = document.querySelector(".menu-button");
const menu = document.querySelector(".menu");
const menuBtnClose = document.querySelector(".menu-button-close");
const headerH1 = document.querySelector('.topContainer .header h1')

// hide the menu
window.addEventListener('load', () => {
  //TweenMax.set('.menu', {x: -2560});
  TweenMax.set('.menu', {y: -2560});
});

const menuToggleOpen = () => {
  //menu.classList.toggle("menu--open");
  menuBtn.classList.toggle("hamburger-hide");
  menuBtnClose.classList.toggle("menu-btn-close-hide");
  //TweenMax.to('.menu', 1, {x: 0});
  TweenMax.to('.menu', 1, {y: 0});
};

const menuToggleClose = () => {
  //menu.classList.toggle("menu--open");
  menuBtn.classList.toggle("hamburger-hide");
  menuBtnClose.classList.toggle("menu-btn-close-hide");
  //TweenMax.fromTo('.menu', 2, {x:1}, {x: -2560});
  TweenMax.fromTo('.menu', 2, {y:1}, {y: -2560});
};

menuBtn.addEventListener("click", event => {
  menuToggleOpen();
});

menuBtnClose.addEventListener("click", event => {
  menuToggleClose();
}); // end Menu code




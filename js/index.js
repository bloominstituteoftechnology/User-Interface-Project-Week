// navigation

const openNav = document.querySelector(".nav-hamburger-closed");
const closeNav = document.querySelector(".close-nav-X");
const nav = document.querySelector(".open-nav");

openNav.addEventListener("click", () => {
  nav.style.display = "flex";
  TweenMax.fromTo(nav, 0.3, { y: -800 }, { y: 0 });
});
closeNav.addEventListener("click", () => {
  TweenMax.fromTo(nav, 0.3, { y: 0 }, { y: -1000 });
});

// navigation

const openNav = document.querySelector(".nav-hamburger-closed");
const closeNav = document.querySelector(".close-nav-X");
const nav = document.querySelector(".open-nav");
const home = document.querySelector(".go-home");

openNav.addEventListener("click", () => {
  nav.style.display = "flex";
  TweenMax.fromTo(nav, 0.5, { y: -800 }, { y: 0 });
  TweenMax.to(openNav, 0.5, {
    scale: 1,
    rotation: 90
  });
  console.log("clicked open");
});
closeNav.addEventListener("click", () => {
  TweenMax.fromTo(nav, 0.5, { y: 0 }, { y: -1000 });
  TweenMax.to(openNav, 0.5, {
    scale: 1,
    rotation: 0
  });
  console.log("clicked close");
});

home.addEventListener("click", () => {
  TweenMax.fromTo(nav, 0.5, { y: 0 }, { y: -1000 });
  console.log("clicked");
});

let controller = new ScrollMagic.controller();

let homeScene = new ScrollMagic.Scene({
  triggerElement: "."
});

console.log(controller);

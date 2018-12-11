const navbar = document.querySelector(".navbar__container");
const navbarText = document.querySelector(".nav__menu");
const burger = document.querySelector(".burger");
const body = document.querySelector("body");

burger.addEventListener("click", () => {
  navbar.classList.toggle("navbar--open");
  navbarText.classList.toggle("nav__menu--open");
  body.classList.toggle("stop__scrolling");
  if (body.classList.contains("stop__scrolling")) {
    // body.bind("touchmove", e => e.preventDefault());
    burger.src = "./img/nav-hamburger-close.png";
  } else {
    // body.unbind("touchmove");
    burger.src = "./img/nav-hamburger.png";
  }
});

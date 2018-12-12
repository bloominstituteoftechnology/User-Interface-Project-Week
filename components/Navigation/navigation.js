const navContainer = document.querySelector(".navbar__container");
const navMenu = document.querySelector(".nav__menu");
const navText = document.querySelector(".menu__placement");
const burger = document.querySelector(".burger");
const body = document.querySelector("body");

burger.addEventListener("click", () => {
  if (navMenu.classList.contains("nav__menu--open")) {
    TweenMax.to(navMenu, 1, { className: "-=nav__menu--open" });
    navText.classList.remove("menu__placement--open");
    navText.classList.add("menu__placement--closed");
    burger.src = "./img/nav-hamburger.png";
    body.classList.toggle("stop__scrolling");
    navContainer.style.backgroundColor = "#8f9ba7";
  } else {
    TweenMax.to(navMenu, 1, { className: "+=nav__menu--open" });
    navText.classList.add("menu__placement--open");
    navText.classList.remove("menu__placement--closed");
    burger.src = "./img/nav-hamburger-close.png";
    body.classList.toggle("stop__scrolling");
    navContainer.style.backgroundColor = "transparent";
  }
});

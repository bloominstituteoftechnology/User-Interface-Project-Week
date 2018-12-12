const navbar = document.querySelector(".navbar__container");
const navbarText = document.querySelector(".nav__menu");
const burger = document.querySelector(".burger");
const body = document.querySelector("body");

burger.addEventListener("click", () => {
  if (navbar.classList.contains("navbar--open")) {
    TweenMax.to(navbar, 1, { className: "-=navbar--open" });
    TweenMax.to(navbarText, 1, { className: "-=nav__menu--open" });
    burger.src = "./img/nav-hamburger.png";
    body.classList.toggle("stop__scrolling");
  } else {
    TweenMax.to(navbar, 1, { className: "+=navbar--open" });
    TweenMax.to(navbarText, 1, { className: "+=nav__menu--open" });
    burger.src = "./img/nav-hamburger-close.png";
    body.classList.toggle("stop__scrolling");
  }
});

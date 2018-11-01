// Nav Vars
const navBtn = document.querySelectorAll(".nav-menu-btn");
const navOpen = document.querySelector(".open");
const navClose = document.querySelector(".close");
const nav = document.querySelector("nav");
let navLinks = document.querySelectorAll(".nav-link");
const topBar = document.querySelector(".topbar");
const logo = document.querySelector(".logo");
const jumboH1 = document.querySelector(".jumbotron h1");

// Nav expanding and retracting
navBtn.forEach(item => {
  item.addEventListener("click", () => {
    TweenLite.from(nav, 0.4, {
      lineHeight: 0,
      opacity: 0,
      height: 0
    });
    nav.classList.toggle("nav-display-toggle");
    navOpen.classList.toggle("display-toggle");
    navClose.classList.toggle("display-toggle");
    navLinks.forEach(link => link.classList.toggle("display-toggle"));
  });
});

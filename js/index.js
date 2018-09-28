// navigation
const openNav = document.querySelector(".nav-hamburger-closed");
const closeNav = document.querySelector(".close-nav-X");
const nav = document.querySelector(".open-nav");
const home = document.querySelector(".go-home");
const animateProjects = document.querySelector("#home-animate");
const animateDiv = document.querySelector("#animate-div");
console.log(animateProjects);

openNav.addEventListener("click", () => {
  nav.style.display = "flex";
  TweenMax.fromTo(nav, 0.4, { y: -800 }, { y: 0 });
  TweenMax.to(openNav, 0.5, {
    scale: 1,
    rotation: 90
  });
});
closeNav.addEventListener("click", () => {
  TweenMax.fromTo(nav, 0.5, { y: 0 }, { y: -1200 });
  TweenMax.to(openNav, 0.5, {
    scale: 1,
    rotation: 0
  });
  console.log("clicked close");
});

home.addEventListener("click", () => {
  TweenMax.fromTo(nav, 0.5, { y: 0 }, { y: -1200 });
  console.log("clicked");
});

ScrollReveal().reveal(".architect, .designs, .project-1, .project-2, .project-3", { delay: 300 });

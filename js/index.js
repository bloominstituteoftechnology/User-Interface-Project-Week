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
  TweenMax.fromTo(nav, 0.5, { y: 0 }, { y: -900 });
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

animateProjects.addEventListener("mouseenter", () => {
  TweenLite.to(animateDiv, 3, { ease: SlowMo.ease.config(0.7, 0.7, false), x: -404 });
});

animateProjects.addEventListener("mouseleave", () => {
  TweenLite.from(animateDiv, 1, { ease: Elastic.easeOut.config(1, 0.3), y: -50 });
});

ScrollReveal().reveal(".architect, .designs, .project-1, .project-2, .project-3", { delay: 300 });

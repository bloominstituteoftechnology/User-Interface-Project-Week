// navigation

const openNav = document.querySelector(".nav-hamburger-closed");
const closeNav = document.querySelector(".close-nav-X");
const nav = document.querySelector(".open-nav");

openNav.addEventListener("click", () => {
  nav.style.display = "flex";
});
closeNav.addEventListener("click", () => {
  nav.style.display = "none";
});

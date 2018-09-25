// JS goes here
AOS.init({
    duration: 1200,
  })

  const hamburger = document.querySelector(".navbar img");
const dropdown = document.querySelector(".menu-items");
let visibility = false;

hamburger.addEventListener("click", (event) => {
  visibility = dropdown.classList.toggle("menu-items_revealed");
  !visibility ? hamburger.src = "./img/nav-hamburger.png" : hamburger.src = "./img/nav-hamburger-close.png";
})
const menu = document.querySelector('.menu-items');
const hamburger = document.querySelector(".navbar img");
const dropdown = document.querySelector(".menu-items");
let visibility = false;

hamburger.addEventListener("click", (event) => {
  visibility = dropdown.classList.toggle("menu-items_revealed");
  !visibility ? hamburger.src = "./img/nav-hamburger.png" : hamburger.src = "./img/nav-hamburger-close.png";
}) 

// const menuTween = new TimelineMax({paused: true, reversed: true});
// menuTween.from(menu, 0.25, {height:0, ease: Power2.easeOut, opacity:0});
// menuTween.staggerFrom(menuItems, 0.2, {y: -20, opacity: 0},0.015);
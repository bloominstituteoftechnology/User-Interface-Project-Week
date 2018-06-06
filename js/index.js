// JS goes here

// Header menu button
let menuButton = document.querySelector(".menu-button");
let expandedMenu = document.querySelector(".expanded-menu");
let hamburger = document.querySelector(".hamburger")

menuButton.addEventListener("click", () => {
  hamburger.classList.toggle("hamburger-close");
  expandedMenu.classList.toggle("display_none");
});

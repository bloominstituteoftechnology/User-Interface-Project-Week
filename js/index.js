// JS goes here

// NAV
const menu = document.querySelector(".menu-2");
const hamburger = document.querySelector(".hamburger");
const hamburgerOpen = document.querySelector("#menu-button-open");
const hamburgerClose = document.querySelector("#menu-button-close");
const navExpand = document.querySelector("nav");

hamburger.addEventListener("click", function() {
  menu.classList.toggle("menu-open");
  menu.classList.toggle("hide");
  menu.classList.toggle("menu");
  navExpand.classList.toggle("nav-expand");
  hamburgerOpen.classList.toggle("hide");
  hamburgerClose.classList.toggle("hide");
});

// TABS
const buttons = document.querySelectorAll(".tabs-link");
const contents = document.querySelectorAll(".tabs-item");

function buttonClick(event) {
  const dataBtn = event.target.dataset.tab;

  for (let i = 0; i < contents.length; i++) {
    const dataContent = contents[i].dataset.tab;

    if (dataBtn === dataContent) {
      contents[i].classList.remove("hidden");
    } else {
      contents[i].classList.add("hidden");
    }
  }
}

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", buttonClick);
}

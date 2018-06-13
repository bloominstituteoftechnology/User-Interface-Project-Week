// JS goes here

// navbar scroll 

let nav = document.querySelector(".nav");

window.addEventListener("scroll", () => {
    nav.style.background = "#9DA7B1";
    nav.style.opacity = "0.95";
    nav.style.zIndex = "1";
})


// navbar overlay 

let hamburger = document.querySelector(".hamburger");
let overlay = document.querySelector("#overlay");
let anchor = document.querySelector(".home");
let closeHamburger = document.querySelector(".hamburger-close");


hamburger.addEventListener("click", () => {
    overlay.style.display = "block";
})

closeHamburger.addEventListener("click", () => {
    overlay.style.display = "none";
})



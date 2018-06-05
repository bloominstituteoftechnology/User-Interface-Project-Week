let hamburger = document.querySelector(".nav-main-button");
let navHamburger = document.querySelector(".nav-only-button");
let pageContents = document.querySelector('.container');
let navScreen = document.querySelector('.nav-screen');


hamburger.addEventListener("click", () => {
    // pageContents.classList.toggle("hidden");
    navScreen.classList.toggle("hidden");

});

navHamburger.addEventListener("click", () => {
    // pageContents.classList.toggle("hidden");
    navScreen.classList.toggle("hidden");
});

console.log("loaded");
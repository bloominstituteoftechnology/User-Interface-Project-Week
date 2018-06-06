let hamburger = document.querySelector(".nav-main-button");
let pageContents = document.querySelector('.container');
let nav = document.querySelector('nav');


hamburger.addEventListener("click", () => {
    // pageContents.classList.toggle("hidden");
    nav.classList.toggle("collapsed");
});


console.log("loaded");
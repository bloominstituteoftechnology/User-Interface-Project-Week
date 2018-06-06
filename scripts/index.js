let hamburger = document.querySelector(".nav-main-button");
let pageContents = document.querySelector('.container');
let navBar = document.querySelector('nav');


hamburger.addEventListener("click", () => {
    // pageContents.classList.toggle("hidden");
    navBar.classList.toggle("collapsed");
    navBar.classList.toggle("hidden");


});


console.log("loaded");
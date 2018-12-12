// JS goes here

const navOpen = document.querySelector(".open-btn");
const navClose = document.querySelector(".close-btn");
const bigNav = document.querySelector(".nav-big");
const smallNav = document.querySelector(".nav-small");

navOpen.addEventListener("click", function() {    
    bigNav.classList.toggle("hide");
    smallNav.classList.toggle("hide");
})

navClose.addEventListener("click", function() {
    bigNav.classList.toggle("hide");
    smallNav.classList.toggle("hide");    
})
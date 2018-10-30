const navButton = document.querySelector(".hamburger");
const nav = document.querySelector("nav");
const navLinks = document.querySelector(".links");

function navToggle(){
    nav.classList.toggle("nav-height");
    navLinks.classList.toggle("links-toggle");
}


navButton.addEventListener("click",navToggle);
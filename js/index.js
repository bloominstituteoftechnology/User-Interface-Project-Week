const navButton = document.querySelector(".hamburger");
const navLinks = document.querySelector(".links");

function navToggle(){
    navLinks.classList.toggle("links");
    navLinks.classList.toggle("links-toggle");
}


navButton.addEventListener("click",navToggle);
// JS goes here
const navButton = document.querySelector(".navContainer .hamburger");
const navContainer = document.querySelector(".navContainer")
const links = document.querySelector(".links");
navButton.addEventListener("click", ()=>{
    navContainer.classList.toggle("navExpand");
    links.classList.toggle("linksAppear");
    navButton.classList.toggle("hamburgerClose");

})
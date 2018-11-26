// JS goes here
const navButton = document.querySelector(".navContainer img");
const navContainer = document.querySelector(".navContainer")
const links = document.querySelector(".links");
navButton.addEventListener("click", ()=>{
    navContainer.classList.toggle("navExpand");
    links.classList.toggle("linksAppear");

})
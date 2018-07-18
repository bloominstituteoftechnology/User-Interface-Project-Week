// JS goes here
// const menu = document.querySelector(".menu");
const dropdown = document.querySelector(".dropdown");
const dropdownTarget = document.querySelector(".dropdown-content");
const closeButton = document.querySelector(".dropdown-button");

closeButton.addEventListener("click", ()=> {
    if (dropdownTarget.classList.contains("dropdown--open")) {
        dropdownTarget.classList.remove("dropdown--open");
        closeButton.firstElementChild.src = "img/nav-hamburger.png";
    } else {
        dropdownTarget.classList.add("dropdown--open");
        closeButton.firstElementChild.src = "img/nav-hamburger-close.png";        
    }
});

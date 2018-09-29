// JS goes here
// https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded

document.addEventListener("DOMContentLoaded", function(event) {
let hamburgerMenu = document.querySelector('.hamburger-menu-icon-closed');
let extendedNavModal = document.querySelector('.menu-expanded');
let characterToggler = document.querySelector('.character');
extendedNavModal.style.display = "none";
characterToggler.style.display = "relative";


hamburgerMenu.addEventListener('click', () => {
    if (extendedNavModal.style.display === "none") {
        extendedNavModal.style.display = "block";
        hamburgerMenu.src = "img/nav-hamburger-close.png";
        characterToggler.style.display = "none";
    } else {
        extendedNavModal.style.display = "none";
        hamburgerMenu.src = "img/nav-hamburger.png";
        characterToggler.style.display = "block";
    }
})

    console.log("It works")

})
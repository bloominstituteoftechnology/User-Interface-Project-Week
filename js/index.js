// JS goes here
// https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded

document.addEventListener("DOMContentLoaded", function(event) {
let hamburgerMenu = document.querySelector('.hamburger-menu-icon-closed');
let extendedNavModal = document.querySelector('.menu__expanded');
extendedNavModal.style.display = "none";






hamburgerMenu.addEventListener('click', () => {
    if (extendedNavModal.style.display === "none") {
        extendedNavModal.style.display = "block";
        hamburgerMenu.src = "img/nav-hamburger-close.png";
    } else {
        extendedNavModal.style.display = "none";
        hamburgerMenu.src = "img/nav-hamburger.png";
    }
})

    console.log("It works")

})
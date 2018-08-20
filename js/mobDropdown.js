// gets divs containing hidden dropdown
const mobNavButton = document.querySelector(".mob-nav-text-container");

// src vars for hamburger images already declared in dropdown.js
// const navBurgerImgClosed = "https://raw.githubusercontent.com/szincone/User-Interface-Project-Week/master/img/nav-hamburger-close.png";
// const navBurgerImgOpen = "https://raw.githubusercontent.com/szincone/User-Interface-Project-Week/master/img/nav-hamburger.png";

//
const mobNavBurger = document.querySelector(".mob-nav-burger");
const mobButton = document.querySelector(".mob-dropdown-button")

mobButton.addEventListener("click", () => {
        mobNavButton.classList.toggle("mob-dropdown-hidden");
        if (mobNavBurger.src === navBurgerImgClosed) {
            mobNavBurger.src = navBurgerImgOpen;
        }
        else {
            mobNavBurger.src = navBurgerImgClosed;
        }
})
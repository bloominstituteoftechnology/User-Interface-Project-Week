// QUERY SELECTORS FOR BUTTONS
// ===========================

const navTopBarMenuButton = document.querySelector(".nav__top-bar__menu-button");

const navMenuCloseButton = document.querySelector(".nav__menu__top-area__close-button");
const navMenuLinks = document.querySelectorAll(".nav__menu__links__item");


// FUNCTIONS TO BE USED WITH EVENT LISTENERS
// =========================================

function openNavMenu(e) {
    const navMenuArea = document.querySelector(".nav__menu");
    navMenuArea.classList.remove("nav__menu--closed");

    TweenMax.fromTo(navMenuArea, 0.5, {
        opacity: 0
    }, {
        opacity: 0.9
    });
}

function closeNavMenu(e) {
    const navMenuArea = document.querySelector(".nav__menu");
    TweenMax.fromTo(navMenuArea, 0.5, {
        opacity: 0.9
    }, {
        opacity: 0,
        onComplete: () => navMenuArea.classList.add("nav__menu--closed")
    });
}


// EVENT LISTENERS
// ===============

// Open menu with top nav menu button
navTopBarMenuButton.addEventListener("click", e => openNavMenu(e));

// Close menu with top area menu button or nav menu links
navMenuCloseButton.addEventListener("click", e => closeNavMenu(e));
navMenuLinks.forEach(link => link.addEventListener("click", e => closeNavMenu(e)))

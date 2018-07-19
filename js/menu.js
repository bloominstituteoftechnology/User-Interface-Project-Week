// JS goes here
// Menu component
const openMenu = () => {
    menu.classList.add("menu-open");
    menuClose.classList.remove("hidden");
    menuButton.classList.add("hidden");
    TweenMax.from(".menu", .5, {y:-800});
    TweenMax.from(".menu-items", 1, {opacity:0});
}

const closeMenu = () => {
    menu.classList.remove("menu-open");
    menuClose.classList.add("hidden");
    menuButton.classList.remove("hidden");
}


const menu = document.querySelector(".menu");
const menuButton = document.querySelector(".menu-button");
const menuClose = document.querySelector(".close-button");

menuButton.addEventListener("click", openMenu);
menuClose.addEventListener("click", closeMenu);



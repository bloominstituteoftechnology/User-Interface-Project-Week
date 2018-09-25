//Corey Gumbs
// JS goes here

const toggleMenu = () => {
    menu.classList.toggle("menu-open");
}

const menu = document.querySelector(".menu");
const expandedMenu = document.querySelector(".expand-menu");

expandedMenu.addEventListener("click", toggleMenu);
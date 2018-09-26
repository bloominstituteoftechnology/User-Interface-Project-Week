//Corey Gumbs
// JS goes here


////Menu Toggle
const toggleMenu = () => {
    menu.classList.toggle("menu-open");
    body.classList.toggle("body-modal-open");
    
};


const menu = document.querySelector(".menu");
const expandedMenu = document.querySelector(".expand-menu");
const body = document.querySelector("body");

expandedMenu.addEventListener("click", toggleMenu);






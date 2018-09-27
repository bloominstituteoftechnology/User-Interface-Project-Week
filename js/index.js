//Corey Gumbs
// JS goes here


////Menu Toggle
const toggleMenu = (e) => {
    e.preventDefault();
    e.stopPropagation();
    menu.classList.toggle("menu-open");
    body.classList.toggle("body-modal-open");

    if(menu.classList[1] == "menu-open"){
        expandedMenu.setAttribute("src", "./img/nav-hamburger-close.png");
    }else{
        expandedMenu.setAttribute("src", "./img/nav-hamburger.png");
    }
};



const menu = document.querySelector(".menu");
const expandedMenu = document.querySelector(".expand-menu");
const body = document.querySelector("body");


expandedMenu.addEventListener("click", toggleMenu);






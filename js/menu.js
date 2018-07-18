// JS goes here
// Menu component
const openMenu = () => {
    menu.classList.add("menu-open");
    menuClose.classList.remove("hidden");
    menuButton.classList.add("hidden");
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

console.log(menu);
console.log(menuButton);
console.log(menuClose);



const showNav = () => {
    // Toggle the "menu--open" class on your menu refence. 
    menu.classList.toggle("menu--open");
  }





const menu = document.querySelector(".menu");


const hamButton= document.querySelector(".nav-button");

hamButton.addEventListener("click", showNav);

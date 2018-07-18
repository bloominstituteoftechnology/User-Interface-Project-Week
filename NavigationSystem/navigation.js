const toggleMenu = () => {
    menu.classList.toggle("menu--open");
}



// Create a reference to the ".custom-menu" class
const menu = document.querySelector(".custom-menu");
// Create a reference to the  ".menu-button" class (hamburger image)
const menuButton = document.querySelector(".menu-button");
//Using my menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener("click", toggleMenu);


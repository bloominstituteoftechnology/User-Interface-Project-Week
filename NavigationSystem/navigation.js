const toggleMenu = () => {
    menu.classList.toggle("menu--open");  
}

const openMenu = function () {
    if(menuButton.src = "img/nav-hamburger.png") {
        return menuButton.src = "img/nav-hamburger-close.png";
    } 
    else if(menuButton.src = "img/nav-hamburger-close.png") {
        return menuButton.src = "img/nav-hamburger.png"; /* === This isnt working ====*/
    }
}


    


// Create a reference to the ".custom-menu" class
const menu = document.querySelector(".custom-menu");
// Create a reference to the  ".menu-button" class (hamburger image)
const menuButton = document.querySelector(".menu-button");
//Using my menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener("click", toggleMenu);
menuButton.addEventListener("click", openMenu);


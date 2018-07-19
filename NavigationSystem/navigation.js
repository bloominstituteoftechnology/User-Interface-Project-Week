// const menuOpen = () => {
//     menu.classList.toggle("menu--open");  
// }

// const menuClose = () => {
//     menu.classList.toggle("menu-");  
// }


// // swapImage changes the hamburger image
// let swapImage =  () => {
//     closeHamburger.classList.toggle("appear--menu");
//     hamburgerButton.classList.toggle("close-button");
// }
    


    


// // Create a reference to the ".custom-menu" class
const menu = document.querySelector(".custom-menu");
// // Create a reference to the  ".menu-button" class (hamburger image)
// const menuButton = document.querySelector(".menu-button");
// //Using my menuButton reference, add a click handler that calls toggleMenu
// menuButton.addEventListener("click", toggleMenu);



let Button = document.querySelector(".open-button");
let ButtonClose = document.querySelector(".close-button");

// hamburgerButton.addEventListener("click", swapImage);
Button.addEventListener("click", () => {
    menu.classList.toggle("menu--open");
    Button.style.display = "none";
    ButtonClose.style.display = "block";
})

ButtonClose.addEventListener("click", () => {
    menu.classList.toggle("menu--open");
    Button.style.display = "block";
    ButtonClose.style.display = "none";
})



const toggleMenu = () => { 
  menu.classList.toggle("menu--open");
}
  // Toggle the "menu--open" class on your menu refence. 
// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector(".menu");
const button = document.querySelector(".hamex")
// create a reference to the ".menu-button" class
// Using your menuButton reference, add a click handler that calls toggleMenu
button.addEventListener("click", toggleMenu);
// Use an if statement to determine and switch open and closed buttons from hamburger to x
let imageTracker = 'open';
const changeButton = () => {
  let image = document.getElementById("opened");
  if (imageTracker == 'open'){
    image.src='img\\nav-hamburger-close.png';
    imageTracker = 'close';
  }else{
    image.src='img\\nav-hamburger.png';
    imageTracker = 'open';
  }
}
// End of Dropdown Menu
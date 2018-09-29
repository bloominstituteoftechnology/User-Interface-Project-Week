// JS goes here

const toggleMenu = (event) => {
    // Toggle the "menu--open" class on menu reference. 
    console.log("toggleMenu was called");
    menu.classList.toggle("menu--open");
    menuButton.classList.toggle("menu-button--clicked")
  }
  
  // Start Here: Create a reference to the ".menu" class
  
  let menu = document.querySelector(".menu");
  
  // create a reference to the ".menu-button" class
  
  let menuButton = document.querySelector(".menu-button");
  
  // Using your menuButton reference, add a click handler that calls toggleMenu
  
  menuButton.addEventListener('click', e => {
    toggleMenu();
  })
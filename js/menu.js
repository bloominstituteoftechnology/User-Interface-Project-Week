console.log("menu connected")

const toggleMenu = () => {
    // Toggle the "menu--open" class on your menu refence. 
  }
  
  // Start Here: Create a reference to the ".menu" class
  const menu = document.querySelector(".menu");
  // create a reference to the ".menu-button" class
  const menuButton = document.querySelector(".burger");
  // Using your menuButton reference, add a click handler that calls toggleMenu
  
  menuButton.addEventListener("click", (event)=>{
    console.log("toggleMenu")
    menu.classList.toggle("menu--open");
  })
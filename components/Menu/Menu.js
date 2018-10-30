const toggleMenu = () => {
    // Toggle the "menu--open" class on your menu reference. 
    menu.classList.toggle('menu');
    console.log("should have worked");
  }
  
  
  
  // Start Here: Create a reference to the ".menu" class
  const menu = document.querySelector('.menu');
  // create a reference to the ".menu-button" class
  const menuButton = document.querySelector('.menu-button');
  // Using your menuButton reference, add a click handler that calls toggleMenu
  menuButton.addEventListener('click', event => toggleMenu(event));
  
  

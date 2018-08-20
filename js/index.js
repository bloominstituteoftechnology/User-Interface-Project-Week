const toggleMenu = () => {
    // Toggle the "menu--open" class on your menu refence. 
    dropDown.style.display= 'block'
    dropButton2.style.display= 'block'

  
  }

  const toggleOff = () => {
    // Toggle the "menu--open" class on your menu refence. 
    dropDown.style.display= 'none'
    dropButton2.style.display= 'none'
  }
  
  
  // Start Here: Create a reference to the ".menu" class
  const dropDown= document.querySelector('.dropdown');
  
 
  
  
  // create a reference to the ".menu-button" class
  const dropButton = document.querySelector(".drop-button");
  const dropButton2 = document.querySelector(".drop-button2");
  
  // Using your menuButton reference, add a click handler that calls toggleMenu
  
  dropButton.addEventListener('click', toggleMenu);
  dropButton2.addEventListener('click', toggleOff);
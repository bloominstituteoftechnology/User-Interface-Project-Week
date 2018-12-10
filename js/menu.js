const toggleMenu = () => {
    // Toggle the "menu--open" class on your menu refence. 
    menu.classList.toggle("menu--open");
  }
  
  const offMenu = () => {
    if (menu.classList.contains("menu--open")) {
      menu.classList.remove("menu--open");
    }
  }
  
  // Start Here: Create a reference to the ".menu" class
  const menu = document.querySelector(".menu");
  // create a reference to the ".menu-button" class
  const menuButton = document.querySelector(".menu-button");
  // Using your menuButton reference, add a click handler that calls toggleMenu
  menuButton.addEventListener("click", toggleMenu);
  
  //const articlesset = document.querySelector(".articles");
  
  // if an area in the articles is clicked while the menu is open, close the menu
  //articlesset.addEventListener("click", offMenu);
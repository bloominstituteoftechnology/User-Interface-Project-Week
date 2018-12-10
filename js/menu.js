const openMenu = () => {
    // Toggle the "menu--open" class on your menu refence. 
    menu.style.display = "block"
    menuButton.style.display = "none";
  }
  
const closeMenu = () => {
  if (menu.style.display == "block") {
    menu.style.display = "none";
    menuButton.style.display = "block";
  }
}
  
  const menu = document.querySelector(".menu");
  const menuButton = document.querySelector(".menu-button");
  const closeButton = document.querySelector(".close-button");

  // click handlers that call menu functions
  menuButton.addEventListener("click", openMenu);
  closeButton.addEventListener("click", closeMenu);

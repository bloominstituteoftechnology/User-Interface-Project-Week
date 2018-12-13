const openMenu = () => {
    
    menu.style.display = "block"
    menuButton.style.display = "none";
    TweenMax.from(menu, 2,  {
      x:900,
      ease: Power4.easeOut,
  });
  
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
   
  menuButton.addEventListener("click", openMenu);
  closeButton.addEventListener("click", closeMenu);

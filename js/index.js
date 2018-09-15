const toggleMenu = () => {
    menu.classList.toggle("menu--open");
  }
  
  const menu = document.querySelector(".menu");
  const menuButton = document.querySelector(".menu-button");
  const menuButtonClose = document.querySelector(".menu-button-close");
  menuButton.addEventListener("click", toggleMenu);
  menuButtonClose.addEventListener("click", toggleMenu);
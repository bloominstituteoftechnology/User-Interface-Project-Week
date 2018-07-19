console.log("menu connected")

const toggleMenu = () => {
  }
  
  const menu = document.querySelector(".menu");
  const menuButton = document.querySelector(".menu-button");
  
  menuButton.addEventListener("click", (event)=>{
    console.log("toggleMenu")
    menu.classList.toggle("menu--open");
  })


  let x = document.querySelector(".x");
  let menuClose = document.querySelector(".menu-button"); 
  menuClose.addEventListener("click", (event)=>{
    console.log("click")

  })
console.log("menu connected")

 
  const menu = document.querySelector(".menu");
  const menuButton = document.querySelector(".menu-button");
  
  menuButton.addEventListener("click", (event)=>{
    console.log("toggleMenu")
    let isOpen = menu.classList.toggle("menu--open");
    if (isOpen) {
      menuButton.src = './img/nav-hamburger-close.png'; 
    } else { 
      menuButton.src = './img/nav-hamburger.png'; 
    }
  
  })


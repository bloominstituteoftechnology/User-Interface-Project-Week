// JS goes here

// Navigation - Expandable Menu

const toggleMenu = () => {
    // menu.classList.toggle('menu--open');
     if(menu.className.includes("menu--open")) {
       
        menu.classList.remove("menu--open");
        TweenLite.to(menu, 1, { 
          ease: Circ.easeOut, 
          height: 50
        });

       
      } else {
        menu.classList.add("menu--open");
        TweenLite.set(".menu--open", {clearProps:"all"})
        TweenLite.from(menu, 1, { 
          ease: Circ.easeOut, 
          height: 50
        });

       }
    
  }

  const collapseButton = () => {
   // TweenLite.to()
    menuButton.style.display = "none";
    //move rapidly up and out
    menuClose.style.display = "block";
    //move rapidly up and in
  }

  
  const expandButton = () => {
    menuButton.style.display = "block";
    //rapidly move up and in
    menuClose.style.display = "none";
    //rapidly move up and out
  }
  
  
  const menu = document.querySelector('.navbar');

  const menuClose = document.querySelector('.menu-close');
  const menuButton = document.querySelector('.menu-button');
 
  menuButton.addEventListener('click', () => {
    toggleMenu();
    collapseButton();
});

menuClose.addEventListener('click', () => {
    toggleMenu();
    expandButton();
});



 


  

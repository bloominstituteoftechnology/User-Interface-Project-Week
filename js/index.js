// JS goes here
const toggleMenu = () => {
    // Toggle the "menu--open" class on your menu refence. 
    
    menu.classList.toggle('menu--open');
    
  }

let toggle = false;

const toggleimg = () => {
    if(toggle === false){
        menuButton.src = 'img/nav-hamburger-close.png';
        nav.style.maxWidth = '100vw'; 
        nav.style.left = '0';
        toggle = true;
        TweenMax.to(menuButton, 1, {x:50, ease:Bounce.easeOut});
        TweenMax.to(menuButton, 3, {rotation: 360});
    } else if (toggle === true){
        menuButton.src = 'img/nav-hamburger.png';
        nav.style.maxWidth = '1024px';
        nav.style.left = null;
        toggle = false;
    }
}

  // Start Here: Create a reference to the ".menu" class
  const menu = document.querySelector('.menu');
  // create a reference to the ".menu-button" class
  const menuButton = document.querySelector('.hamburger');
  // Using your menuButton reference, add a click handler that calls toggleMenu
  const nav = document.querySelector('.main-nav');
  
  menuButton.addEventListener('click', (e) => {
     toggleMenu();
     toggleimg();
    
  });

  
  

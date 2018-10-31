// JS goes here


const toggleMenu = () => {
    // Toggle the "menu--open" class on your menu reference. 
    menu.classList.add('menu--open');

    menuButton.style.display = 'none';
    menuButtonClose.style.display = 'inline';
    console.log('clicked');

    TweenMax.from(menu, 1, {
      opacity: 0,
    });


  }

  const toggleMenuClose = () => {
    
    menu.classList.remove('menu--open');

    menuButtonClose.style.display = 'none';
    menuButton.style.display = 'inline';
    console.log('close clicked');

    // TweenMax.from('.container', 2, {
    //   opacity: 0.5,
    //   // x: 100,
    // });

    // TweenMax.from(menu, 2, {
    //   // opacity: 1,
    //   x: 100, 
    //   y: 350, 
    //   rotationX:360, 
    //   ease: SlowMo.ease.config(0.7, 0.7, false),
    // });

  }


  
  // Start Here: Create a reference to the ".menu" class
  const menu = document.querySelector('.menu');
  
  // create a reference to the ".menu-button" class
  const menuButton = document.querySelector('.menu-button');
  const menuButtonClose = document.querySelector('.menu-close-button');

  // console.log(menuButton);
  // console.log(menu);
  // console.log(menuButtonClose);
  
  // Using your menuButton reference, add a click handler that calls toggleMenu
  
  menuButton.addEventListener('click', toggleMenu);
  menuButtonClose.addEventListener('click', toggleMenuClose);

// Animations

const homeTitle = document.querySelector('.header ul');
console.log(homeTitle);

window.addEventListener("load", () => {
  TweenMax.to(homeTitle, 1, {
      x:15,
      y:-15,
  });
})
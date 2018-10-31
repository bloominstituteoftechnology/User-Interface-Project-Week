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

// Title animation
const homeTitle = document.querySelector('.header ul');
console.log(homeTitle);

// window.addEventListener("load", () => {
//   TweenMax.to(homeTitle, 1, {
//       x:15,
//       y:-15,
//   });
// })

// Button Animation

const button = document.querySelector('.btn'),
    background = document.querySelector('.backgroundHover'),
    firstWord = document.querySelectorAll('.btn span'),
    secondWord = document.querySelectorAll('.btn i');

const tl = new TimelineMax({paused: true});
tl.staggerTo(firstWord, 1, {color: "rgb(55,178,230)", rotationX: 360, ease: Expo.easeOut}, 0.03, "#start");
tl.staggerTo(secondWord, 1, {color: "rgb(55,178,230)", rotationX: 360, ease: Expo.easeOut}, 0.03, "#start");
tl.to(button, 0.3, {"border-color": "rgb(255,255,255,0)", ease: Quad.easeOut}, "#start");
tl.from(background, 0.25, {scaleX: "0%", transformOrigin: "left center", ease: Quad.easeInOut}, "#start");

button.addEventListener("mouseenter", function(){
  tl.play();
});

button.addEventListener("mouseleave", function(){
  tl.reverse();
});



const button2 = document.querySelector('.btn2'),
    background2 = document.querySelector('.backgroundHover2'),
    firstWord2 = document.querySelectorAll('.btn2 span'),
    secondWord2 = document.querySelectorAll('.btn2 i');

const tl2 = new TimelineMax({paused: true});
tl2.staggerTo(firstWord2, 1, {color: "rgb(55,178,230)", rotationX: 360, ease: Expo.easeOut}, 0.03, "#start");
tl2.staggerTo(secondWord2, 1, {color: "rgb(55,178,230)", rotationX: 360, ease: Expo.easeOut}, 0.03, "#start");
tl2.to(button2, 0.3, {"border-color": "rgb(255,255,255,0)", ease: Quad.easeOut}, "#start");
tl2.from(background2, 0.25, {scaleX: "0%", transformOrigin: "left center", ease: Quad.easeInOut}, "#start");

button2.addEventListener("mouseenter", function(){
  tl2.play();
});

button2.addEventListener("mouseleave", function(){
  tl2.reverse();
});
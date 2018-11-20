
// When the navigation button is clicked, the links are shown.
const navBtn = document.querySelector('.navBtn');
const links  = document.querySelector('.linksShow');
const nav    = document.querySelector('nav');

// Flag to keep track of menu open or close
let flag = 0;

navBtn.addEventListener('click', () => {

  //Show or hide the links
  if(flag === 0) {
    // open menu
    console.log('open');
    TweenMax.fromTo(links, 1, {yPercent:-110, opacity:0}, {yPercent:0, opacity: 0.9});
    flag = 1;
  }
  else {
    console.log('close');

    // close menu
    TweenMax.fromTo(links, 2, {yPercent:0, opacity:0.9}, {yPercent:-110, opacity: 0});
    flag = 0;
  }
 
  // Display/hide links
  setTimeout(() => {
    nav.classList.toggle('showFull');
    links.classList.toggle('hide');
  }, 200);
    
  // Change the button (either open or close)
  TweenMax.fromTo(navBtn, 1, {rotationX:180}, {rotationX:-180});  
  navBtn.classList.toggle('openBtn');
  navBtn.classList.toggle('closeBtn');

});


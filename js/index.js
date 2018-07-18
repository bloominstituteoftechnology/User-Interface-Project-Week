// JS goes here
const fadeNavPanel = function(){
  TweenMax.fromTo('.nav-page', 1, {opacity:0}, {opacity: 1})
}
const showNavPanel = function(){
  navPage[0].classList.toggle('showNav');
//----------Another great example of forEach-----------//
  // navBTNOpen.classList.toggle('hide-icon');
  // navBTNClose.classList.toggle('hide-icon');
  navBTN.forEach( (target) => {
    target.classList.toggle('hide-icon');
  });
  fadeNavPanel();
}

const navOpacity = function(){
  TweenMax.to(".top-bar", 1, {
    backgroundColor:'#828282',
  })
}

//---------needed for examples of forEach --------//
// const navBTNOpen = document.querySelector('#open-icon');
// const navBTNClose = document.querySelector('#close-icon');

let navBTN = document.querySelectorAll('.nav-icon');
let navPage = document.querySelectorAll(".nav-page");
let topBar = document.querySelector('.top-bar');

navPage = Array.from(navPage);
navBTN = Array.from(navBTN);

//-----------------Best example of forEach----------------------//
// navBTN[0].addEventListener("click", showNavPanel);
// navBTN[1].addEventListener("click", showNavPanel);
navBTN.forEach( (target) => {
  target.addEventListener("click", showNavPanel)
});
document.addEventListener('wheel', navOpacity);

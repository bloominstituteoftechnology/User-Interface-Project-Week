// JS goes here

const showNavPanel = function(){
  navPage[0].classList.toggle('showNav');
  navBTNOpen.classList.toggle('hide-icon');
  navBTNClose.classList.toggle('hide-icon');
  console.log(navBTN)
}

const navOpacity = function(){
  topBar.style.background = '#828282';
}

let navBTN = document.querySelectorAll('.nav-icon');
const navBTNOpen = document.querySelector('#open-icon');
const navBTNClose = document.querySelector('#close-icon');
let navPage = document.querySelectorAll(".nav-page");
let topBar = document.querySelector('.top-bar');

navPage = Array.from(navPage);
navBTN = Array.from(navBTN);
console.log(navBTN[0]);
console.log(navPage[0]);

//-----------------Best example of forEach----------------------//
// navBTN[0].addEventListener("click", showNavPanel);
// navBTN[1].addEventListener("click", showNavPanel);
navBTN.forEach( (target) => {
  target.addEventListener("click", showNavPanel)
});
document.addEventListener('wheel', navOpacity);

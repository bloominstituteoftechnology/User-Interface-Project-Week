// JS goes herelet overlay = document.querySelector(".overlay");
let overlay = document.querySelector(".overlay");
let menuBtn = document.querySelector(".ham");
let closeBtn = document.querySelector(".x-home");

menuBtn.addEventListener('click', function() {
  // I want overlay to display block now
  overlay.style.display = "block";
});

closeBtn.addEventListener('click', function() {
  // I want overlay to display none now
  overlay.style.display = "none";
});

let tabOne = document.querySelector(".tab1");
let tabTwo = document.querySelector(".tab2");
let tabThree = document.querySelector(".tab3");
let tabFour = document.querySelector(".tab4");

let buttonOne = document.querySelector(".btn-1");
let buttonTwo = document.querySelector(".btn-2");
let buttonThree = document.querySelector(".btn-3");
let buttonFour = document.querySelector(".btn-4");

buttonOne.addEventListener('click', function(){
    tabOne.style.display="block";
    tabTwo.style.display="none";
    tabThree.style.display="none";
    tabFour.style.display="none";
});

buttonTwo.addEventListener('click', function(){
  tabOne.style.display="none";
  tabTwo.style.display="block";
  tabThree.style.display="none";
  tabFour.style.display="none";
});

buttonThree.addEventListener('click', function(){
  tabOne.style.display="none";
  tabTwo.style.display="none";
  tabThree.style.display="block";
  tabFour.style.display="none";
});

buttonFour.addEventListener('click', function(){
  tabOne.style.display="none";
  tabTwo.style.display="none";
  tabThree.style.display="none";
  tabFour.style.display="block";
});
// JS goes here

const showNavPanel = function(){
  console.log(`was clicked`);
  console.log(navPage[0]);
  navPage[0].classList.toggle('showNav');
  navPage[0].style.background = "red";
  console.log(`was run`);
}

const navBTN = document.querySelector('.nav-icon');
let navPage = document.querySelectorAll(".nav-page");

navPage = Array.from(navPage);
console.log(navBTN);
console.log(navPage[0]);

navBTN.addEventListener("click", showNavPanel);

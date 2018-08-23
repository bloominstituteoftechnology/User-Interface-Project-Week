// JS goes here

let menu = document.querySelector(".menu");
let navExpanded = false;

console.log(menu);

menu.addEventListener("click", function(e) {
  menu.setAttribute("src", "./img/nav-hamburger-close.png");
  let nav = document.querySelector(".nav-container");
  nav.classList.toggle("expanded");
  document.querySelector(".nav").classList.toggle("nav-active");

  //change menu icon
  menu.classList.toggle("menu-close");
  console.log("menu was clicked");
});

function submit() {
  alert("Thank you for your form!");
}

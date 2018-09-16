// JS goes here

const toggleMenu = () => {
  menu.classList.toggle("menu--open");
  let hamburger = document.querySelector("menu-button");
  console.log(hamburger);
  /*if (hamburger === "img/nav-hamburger.png"){
    document.querySelector("menu-button").innerHTML = "img/nav-hamburger-close.png"
  }
  else {
    document.querySelector("menu-button").innerHTML = "img/nav-hamburger.png"
  }*/
}

const menu = document.querySelector(".menu");
const menuButton = document.querySelector(".menu-button");
menuButton.addEventListener("click", function(){
  return toggleMenu();
});

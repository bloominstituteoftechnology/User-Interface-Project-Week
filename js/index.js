// JS goes here

function interface() {
let menuOpen = true;

console.log("im here");

const menuButton = document.querySelector(".menu-button");
//let menu = document.querySelector(".menu");
console.log(menuButton);
menuButton.addEventListener("click", clickMenu);
let menu = document.querySelector(".nav");
menuButton.style.cursor = "pointer";


    function clickMenu() {
        if (menuOpen === true) {
            menu.classList.remove("nav-close");
            menu.classList.add("nav-open");
            menuOpen = false;
          } else {
            menu.classList.remove("nav-open");
            menu.classList.add("nav-close");
            menuOpen = true;
          }    
        
     
}















}

interface();
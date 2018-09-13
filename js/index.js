// JS goes here

function interface() {
let menuOpen = true;

const menuButton = document.querySelector(".menu-button");
menuButton.addEventListener("click", clickMenu);
let menu = document.querySelector(".nav");
const formInput = document.querySelector(".input");
formInput.addEventListener("focus", inputFocus);
formInput.addEventListener("keyup", inputEnter);


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


function inputFocus() {
// clears the input for the user to type their email
if (formInput.value === "Enter Email:") {
  formInput.value = "";
  }
}

function inputEnter() {
//check for bad input???? Like not an real email address...
 let theKey = formInput.value;
 console.log("the key is: " + theKey);
  if (theKey === "enter") {
    alert("Thank you for submitting your email. We will be contacting you shortly.");
    //submit the page
  };
}











}

interface();
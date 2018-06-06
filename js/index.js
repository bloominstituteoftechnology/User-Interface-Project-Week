// JS goes here 


//**************NAV SYSTEM PART 1*******************//

// When the user scrolls the page, execute myFunction 
window.onscroll = function () {
    customFunc()
}; 

// Get the navbar
let navbar = document.getElementById("navbar");


// Get the offset position of the navbar
let sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function customFunc() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

//**************NAV SYSTEM PART 2*******************//

let burgerIcon = document.getElementsByClassName("nav-hamburger2");
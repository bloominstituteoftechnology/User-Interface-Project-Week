// JS goes here 


//**************NAV SYSTEM PART 1*******************//

// When the user scrolls the page, execute myFunction 
window.onscroll = function () {
    customFunc()
}; 

// // Get the transparent navbar
// let navbarClear = document.getElementById("clear")

// Get the opaque navbar
let navbarOpaque = document.getElementById("opaque");

// // Get the offset position of the navbar
// let sticky = navbarOpaque.offsetTop;
let sticky = navbarOpaque.offsetHeight/2;

// Get the bottom position of the original transparent navbar
// let sticky = navbarOpaque.offsetHeight*2;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function customFunc() {
  if (window.pageYOffset >= sticky) {
    navbarOpaque.classList.add("sticky");
    // navbarOpaque.style.display = "flex";
    
  } else {
    navbarOpaque.classList.remove("sticky");
    // navbarOpaque.style.display = "none";

  }
}




// **************NAV SYSTEM PART 2 - Attempt 1*******************//
// first attempt didn't work because i didn't have the hamburger index large enough.


//Open when hamburger clicked
function openNavMenu() {
    document.getElementById("navMenu").style.display= "block";
}

//Close
function closeNavMenu() {
    document.getElementById("navMenu").style.display= "none";
}


// //**************NAV SYSTEM PART 2 - Attempt 2*******************//

// // let hamburger = document.querySelector("#hamburger");
// let hamburger2 = document.querySelector("#hamburger2");

// // hamburger.addEventListener("click", () => {
// //     document.getElementById("navMenu").style.display= "block";
// // })

// hamburger2.addEventListener("click", () => {
//     document.getElementById("navMenu").style.display= "block";
// })

// //Close
// function closeNavMenu() {
//     document.getElementById("navMenu").style.display= "none";
// }

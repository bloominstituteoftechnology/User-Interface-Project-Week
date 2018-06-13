// JS goes here

// navbar scroll 

let nav = document.querySelector(".nav");

window.addEventListener("scroll", () => {
    nav.style.background = "#9DA7B1"; 
    nav.style.opacity = "0.95";
    nav.style.zIndex = "1";
})


// navbar overlay 

let hamburger = document.querySelector(".hamburger");
let overlay = document.querySelector("#overlay");



hamburger.addEventListener("click", () => {
   if (hamburger.src == "file:///Users/kelleyhenican/LambdaSchool/User-Interface-Project-Week/img/nav-hamburger.png") {
      overlay.style.display = "block";
      hamburger.src = "file:///Users/kelleyhenican/LambdaSchool/User-Interface-Project-Week/img/nav-hamburger-close.png"
      nav.style.zIndex = "2";


   }
   else {
       overlay.style.display = "none";
       hamburger.src = "file:///Users/kelleyhenican/LambdaSchool/User-Interface-Project-Week/img/nav-hamburger.png"
       nav.style.zIndex = "2";
   }
  
})




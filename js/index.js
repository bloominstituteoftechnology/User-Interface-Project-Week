let hamburger = document.getElementById("hamburger");
let dropDown = document.getElementById("drop-down")
let navSpecs = document.getElementById("nav-specifics") 
let navContent = document.getElementById("nav-content")
let navBar = document.getElementById("nav-bar")
let closeBtn = document.getElementById("close-btn")
hamburger.addEventListener("click",function(){
  navContent.style.width="100%";
  navBar.style.display="relative";
  
})
closeBtn.addEventListener("click",function(){
  navContent.style.width="0%";
  navContent.style.left="0%";
})







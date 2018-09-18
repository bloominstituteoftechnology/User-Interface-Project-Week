// JS goes here
let hambutton = document.getElementById("hambutton");
let slider = document.getElementById("slider")
let navContent = document.getElementById("nav-content")
let navBar = document.getElementById("nav-bar")
let closeBtn = document.getElementById("close-btn")

hambutton.addEventListener("click",function(){
  navContent.style.width="100%";
  navBar.style.display="relative";
})

closeBtn.addEventListener("click",function(){
  navContent.style.width="0%";
  navContent.style.right="0%";
})

// JS goes here

let overlay = document.querySelector(".overlay");
let menuBtn = document.querySelector(".close-btn");




let show = document.querySelector(".showbtn");

show.addEventListener('click', function() {
overlay.style.display = "block";
})

menuBtn.addEventListener('click', function(){
overlay.style.display = "none";


})
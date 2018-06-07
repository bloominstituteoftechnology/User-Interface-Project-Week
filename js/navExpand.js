let overlay = document.querySelector(".overlay");
let btn = document.querySelector(".hamburger");
let closeBtn = document.querySelector(".close-btn");
btn.addEventListener("click", function() {
 overlay.classList.toggle("hidden");
});
closeBtn.addEventListener("click", function() {
  overlay.style.display = "none";
});

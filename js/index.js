// JS goes here

window.addEventListener("scroll", () => {
  document.querySelector(".header-row").classList.add("scroll-bar");
});

// Open Nav
let hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", function() {
  //   console.log("I is working");
  document.getElementById("myNav").style.display = "block";
});

// Close Nav
let closeNav = document.getElementById("myNav");
closeNav.addEventListener("click", function() {
  closeNav.style.display = "none";
});

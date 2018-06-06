// JS goes here

window.addEventListener("scroll", () => {
  document.querySelector(".header-row").classList.add("scroll-bar");
});

let hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", function() {
  console.log("I is working");
});

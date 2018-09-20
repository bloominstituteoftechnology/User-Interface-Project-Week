let openButton = document.querySelector("#open-button");

let closeButton = document.querySelector("#close-button");

let overlay = document.querySelector("#overlay");

openButton.addEventListener("click", function(event) {
  overlay.style.display = "block";
});

closeButton.addEventListener("click", function(event) {
  overlay.style.display = "none";
});

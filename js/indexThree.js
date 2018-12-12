

window.addEventListener('load', function () {
  icon = document.querySelector(".icon");
  body = document.querySelector("body");
  showDiv = document.querySelector(".show-div");
  container = document.querySelector(".container");
  close = document.querySelector(".close");
  icon.addEventListener("mouseover", function () {
    icon.style.display = "none";
    showDiv.style.display = "block";
    container.style.display = "none";

  })

  close = document.querySelector(".close");
  close.addEventListener("click", function () {
    icon.style.display = "block";
    showDiv.style.display = "none";
    container.style.display = "block";
  })




})
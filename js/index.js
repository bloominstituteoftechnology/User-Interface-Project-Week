const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelectorAll(".menu-link");
const header = document.querySelector("header");

menuBtn.addEventListener("click", () => {
  header.classList.toggle("close");
  menu.forEach(link => link.classList.toggle("close"));
  menuBtn.classList.toggle("close");
});

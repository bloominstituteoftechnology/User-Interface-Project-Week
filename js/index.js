// JS goes here
const mainNav = document.querySelector(".main-nav");
const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-btn");

menuBtn.addEventListener("click", (event) => {
    menuBtn.classList.toggle("hidden");
    mainNav.classList.toggle("display-flex");
    closeBtn.classList.add("visibility");
})

closeBtn.addEventListener("click", (event) => {
    menuBtn.classList.toggle("hidden");
    mainNav.classList.toggle("display-flex");
    closeBtn.classList.remove("visibility");
})
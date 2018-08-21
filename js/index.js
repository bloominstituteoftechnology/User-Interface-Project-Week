const mainNavBtn = document.querySelectorAll(".main-nav-btn");
const navMenu = document.querySelector("nav");
const mainNav = document.querySelector(".main-nav");

mainNavBtn.forEach(btn => btn.addEventListener("click", () => {
    navMenu.classList.toggle("toggle-display");
    mainNav.classList.toggle("toggle-height");
    mainNav.classList.toggle("toggle-opacity");
    mainNavBtn.forEach(btn => btn.classList.toggle("toggle-display"));
}));

const mainNavBtn = document.querySelectorAll(".main-nav-btn");
const aLinks = document.querySelectorAll("nav a");
const navMenu = document.querySelector("nav");
const mainNav = document.querySelector(".main-nav");

if (document.querySelector(".container").classList.contains("index")) {
    aLinks[0].classList.add("selected-link");
} else if (document.querySelector(".container").classList.contains("services")) {
    aLinks[1].classList.add("selected-link");
}

mainNavBtn.forEach(btn => btn.addEventListener("click", () => {
    navMenu.classList.toggle("toggle-display");
    mainNav.classList.toggle("toggle-height");
    mainNav.classList.toggle("toggle-opacity");
    mainNavBtn.forEach(btn => btn.classList.toggle("toggle-display"));
}));

const mainNavBtns = document.querySelectorAll(".main-nav-btn");
const aLinks = document.querySelectorAll("nav a");
const navMenu = document.querySelector("nav");
const mainNav = document.querySelector(".main-nav");

if (document.querySelector(".container").classList.contains("index")) {
    aLinks[0].classList.add("selected-link");
} else if (document.querySelector(".container").classList.contains("services")) {
    aLinks[1].classList.add("selected-link");
} else if (document.querySelector(".container").classList.contains("contact")) {
    aLinks[2].classList.add("selected-link");
}



mainNavBtns.forEach(btn => btn.addEventListener("click", () => {
    navMenu.classList.toggle("toggle-display");
    mainNav.classList.toggle("toggle-height");
    mainNav.classList.toggle("toggle-opacity");
    mainNavBtns.forEach(btn => btn.classList.toggle("toggle-display"));

    TweenMax.fromTo(navMenu, 1.5, {x:-500, scale: 0, skewX: "45deg"}, {ease: Elastic.easeOut, x:0, scale: 1, skewX: "0deg"});
    TweenMax.fromTo(mainNavBtns, 1, {scale: 0}, {ease: Elastic.easeOut, scale: 1});
}));

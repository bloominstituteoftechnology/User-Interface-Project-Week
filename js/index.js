// JS goes here
const navHamburger = document.querySelector(".nav-hamburger");
const closeNav = document.querySelector(".close-nav");
const navContent = document.querySelector(".open-nav");

function toggleNav() {
    navContent.classList.toggle("hidden");

    if (navContent.classList.contains("hidden")) {
        navHamburger.style.display = "block";
        closeNav.style.display = "none";
        sessionStorage.setItem("openNav", "false");
    } else {
        navHamburger.style.display = "none";
        closeNav.style.display = "block";
        sessionStorage.setItem("openNav", "true");
    }
}

navHamburger.addEventListener("click", toggleNav);
closeNav.addEventListener("click", toggleNav);

window.onload = function() {
    if (sessionStorage.openNav) {
        navContent.classList.remove("hidden");
        navHamburger.style.display = "none";
        closeNav.style.display = "block";
    }
}
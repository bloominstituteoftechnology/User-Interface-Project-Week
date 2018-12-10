

// Nav Bar responsiveness
const navbar = document.querySelector("nav");
const hamburger = document.querySelector(".hamburger");
const header = document.querySelector("header");
hamburger.addEventListener('click', () => {
    navbar.classList.toggle('show-nav');
    header.classList.toggle('transparent-bg');
})
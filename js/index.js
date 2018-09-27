// JS goes here

const hamburger = document.querySelector(".navbar img");
const dropdown = document.querySelector(".menu-items");
let visibility = false;
console.log(hamburger)
hamburger.addEventListener("click", (event) => {
    console.log('inside Event')
    visibility = dropdown.classList.toggle("menu-items_revealed");
    !visibility ? hamburger.src = "./img/nav-hamburger.png" : hamburger.src = "./img/nav-hamburger-close.png";
})

// TweenMax.fromTo(dropdown, 1, {opacity: 0, y: 50}, {opacity: 1, y: 0});


AOS.init({
    duration: 1200,
});
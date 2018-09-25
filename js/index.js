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
console.log('inside of index')



AOS.init({
    duration: 1200,
});
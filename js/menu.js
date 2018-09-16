let hamburger = document.querySelector(".hamburger-menu");
let hamburgerClose = document.querySelector(".menu-close");
let links = document.querySelector(".menu-open");
let nav = document.querySelector(".nav");
let overlay = document.querySelector(".overlay");

console.log(links);
hamburger.addEventListener("click", ()  =>  {
    hamburger.style.display = "none";
    hamburgerClose.style.display = "block";
    links.style.display = "flex";
    overlay.style.width = "100%";
    nav.classList.toggle("open")
})

hamburgerClose.addEventListener("click",    ()  =>  {
    hamburger.style.display = "block";
    hamburgerClose.style.display = "none";
    links.style.display = "none";
    overlay.style.width = "0%";
    nav.classList.toggle("open")
})
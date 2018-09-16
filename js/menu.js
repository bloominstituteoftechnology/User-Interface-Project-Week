let hamburger = document.querySelector(".hamburger-menu");
let hamburgerClose = document.querySelector(".menu-close");
let links = document.querySelector(".menu-open");
let nav = document.querySelector(".nav");
console.log(links);
hamburger.addEventListener("click", ()  =>  {
    hamburger.style.display = "none";
    hamburgerClose.style.display = "block";
    links.style.display = "flex";
    nav.classList.toggle("open")
})

hamburgerClose.addEventListener("click",    ()  =>  {
    hamburger.style.display = "block";
    hamburgerClose.style.display = "none";
    links.style.display = "none";
    nav.classList.toggle("open")
})
let hamburger = document.querySelector(".navImg");
let hamburgerClose = document.querySelector(".navImgClose");
let links = document.querySelector(".links");
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

//Nav JS

const toggleOpen = (event) =>{
    nav.classList.toggle("nav-content-open");
}

const change = (event) =>{
    hamburger.classList.toggle("hide");
    close.classList.toggle("hide");
}

const nav = document.querySelector(".nav-content");
const hamburger = document.getElementById("hamburger");
const close = document.getElementById("navExit");
hamburger.addEventListener("click", toggleOpen);
hamburger.addEventListener("click", change);
close.addEventListener("click", toggleOpen );
close.addEventListener("click", change);
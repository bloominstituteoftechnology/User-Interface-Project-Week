let overlay = document.querySelector(".overlay-container");
let burgerBtn = document.querySelector(".nav-burger");
let closeBtn = document.querySelector(".close-button");
let nav = document.querySelector(".navbar");

/* Open */

burgerBtn.addEventListener('click', function () {
    document.getElementById("myNav").style.display = "block";
    // overlay.setAttribute("style", "display: block;");
});


function openNav() {
    document.getElementById("myNav").style.display = "block";
}

/* Close */
function closeNav() {
    document.getElementById("myNav").style.display = "none";
}

let overlay = document.querySelector(".overlay");
let navBtn = document.querySelector(".menu-button");
let closeBtn = document.querySelector(".close-btn");

navBtn.addEventListener('click', function() {
overlay.style.display = "block";
});

closeBtn.addEventListener('click', function() {
overlay.style.display = "none";
});

navBtn.addEventListener('click', function() {
    navBtn.style.display = "none";
});

closeBtn.addEventListener('click', function() {
    navBtn.style.display = "block";
});
    
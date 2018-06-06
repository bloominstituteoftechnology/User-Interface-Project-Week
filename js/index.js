// JS goes here

// function openNav() {
//     let element = document.getElementById("myNav");
//     element.classList.remove("hidden");
//     // element.classList.add("overlay");

// }

// function closeNav() {
//     var element = document.getElementById("myNav")
//     element.classList.add("hidden");
// }
// let overlay = document.querySelector(".overlay");
// let menuBtn = document.querySelector(".menuBtn");
// let closeBtn = document.querySelector('.close-btn');

// menuBtn.addEventListener('click', function () {
//     // I want overlay to display block now
//     console.log('clicked');
//     overlay.style.display = "block";
// });
// closeBtn.addEventListener('click', function () {
//     overlay.style.display = 'none';
// })


let overlay = document.querySelector(".overlay");
let menuBtn = document.querySelector(".nav-btn");
let closeBtn = document.querySelector(".close-btn");

console.log(menuBtn)

menuBtn.addEventListener('click', function () {
    // I want overlay to display block now
    overlay.style.display = "block";
});

closeBtn.addEventListener('click', function () {
    console.log('clicked');
    // I want overlay to display none now
    overlay.style.display = "none";

});
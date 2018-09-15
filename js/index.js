// JS goes here

/* Nav Menu */
const hamburger = document.querySelector('.menu-closed');
const hamburgerX = document.querySelector('.menu-opened');
const menu = document.querySelector('.menu-items');

/* Open menu on click */
hamburger.addEventListener( 'click', function(e) {
    console.log("hamburger clicked");
    hamburger.style.display = "none";
    hamburgerX.style.display = "inline";
    menu.style.display = "block";
});

/* Close menu on click */
hamburgerX.addEventListener( 'click', function(e) {
    console.log("X clicked");
    hamburgerX.style.display = "";
    hamburger.style.display = "";
    menu.style.display = "none";
});
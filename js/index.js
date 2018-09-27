// JS goes here
let hamburger = document.querySelector( ".hamburger" );
let navMenu = document.querySelector( ".navigation" );
let navMenuClose = document.querySelector( ".close-button" );
console.log( hamburger );
hamburger.addEventListener( "click", function( event )
{
    navMenu.style.display = "flex"; 
    this.style.display = "none";
    navMenuClose.style.display = "block";

})
navMenuClose.addEventListener( "click", function( event )
{
    navMenu.style.display = "none";
    navMenuClose.style.display = "none";
    hamburger.style.display = "block";
})
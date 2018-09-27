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

// Services js
let tabs = document.querySelectorAll( ".tabs" );
let tab1 = Array.from( tabs );
class tab{
    constructor( element ){
        this.element = element;
    }
    tabOpenMethod()
    {   
        this.element.addEventListener( "click", function( event )
        {
            event.style.display = "none;";
            for( i = 0; i < tab1.length; i++ )
            {
                // if( tab1[ i ] === )
                console.log( tab[i]);
            }
        });
    }
    
}

let tabMap = tab1.map( function( element )
{
    return new tab( element );
})
console.log( tabMap );
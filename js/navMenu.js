//navMenu.js

let navMenu = document.querySelector('.nav-menu') ;
let buttonNavOpen = document.querySelector('.button-nav-open') ;
let buttonNavClose = document.querySelector('.button-nav-close') ;

let myNavbar = document.querySelector('.my-navbar') ;


buttonNavOpen.addEventListener('click', function() {
    // alert('DON\'T CLICK ME!!!!') ;
    navMenu.style.display = 'block' ;
    // console.log('heyheyhey!')
    // myNavbar.style.display = 'none'
});


buttonNavClose.addEventListener('click', function() {
    // alert('NOOOO!!!!') ;
    navMenu.style.display = 'none' ;
    // console.log('YOYOYO!')
    // myNavbar.style.display = 'block'
});
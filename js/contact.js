// Navigation JS -----------------------------------------
let dropdown = document.querySelector(".dropdown-button");
let content = document.querySelector(".dropdown-content");
let header = document.querySelector("header");
content.style.opacity = '0';
content.style.visibility = 'hidden';

dropdown.addEventListener('click', function() {
    // change the hamburger to an X
    dropdown.src = "./img/nav-hamburger-close.png";
    
    // toggle the class to hide the nav menu
    content.classList.toggle('dropdown-hidden');

    // toggle the X back to hamburger
    if (content.classList.contains('dropdown-hidden') === true) {
        dropdown.src = "./img/nav-hamburger.png";
        TweenMax.to(content, 0.5, {autoAlpha:0, y:0});
        header.style.opacity = "1";

    }
    else {
        TweenMax.to(content, 0.5, {autoAlpha:0.98, y:0});
        header.style.opacity = "0.98";
    }
});

// Page Load Effect ----------------------------------------
TweenMax.from('.hero', .8, {autoAlpha:0, y:-50, ease: Circ.easeOut,});
TweenMax.from('.hero-copy', .8, {autoAlpha:0, y:100, ease: Circ.easeOut,});

let tl = new TimelineMax();
tl.from('.form', .4, {delay: .8 , autoAlpha:0, y:-20, ease: Circ.easeOut,});
tl.from('.offices', .4, {autoAlpha:0, y:-20, ease: Circ.easeOut,});


// Image Replacement on Mobile -----------------------------------
window.addEventListener('resize', function() {
    let width = window.innerWidth;
    let bkgd = document.querySelector('.hero');

    if (width <= 500) {
        bkgd.style.backgroundImage = "url('../img/contact/contact-mobile-jumbotron.png')";
    }
    else if (width > 500) {
        bkgd.style.backgroundImage = "url('../img/contact/contact-jumbotron.png')";
    }
})
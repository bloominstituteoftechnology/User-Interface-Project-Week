// Navigation JS -----------------------------------------
let dropdown = document.querySelector(".dropdown-button");
let content = document.querySelector(".dropdown-content");
let header = document.querySelector("header");
let navlinks = document.querySelectorAll(".nav-item");
let body = document.querySelector('body');

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
        body.style.overflow = 'visible';
    }
    else {
        TweenMax.to(content, 0.5, {autoAlpha:0.98, y:0});
        header.style.opacity = "0.98";
        let tl = new TimelineMax();
        navlinks.forEach(x => tl.from(x, .12, {autoAlpha:0, x: -100}))
        body.style.overflow = 'hidden';
    }
});
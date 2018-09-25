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
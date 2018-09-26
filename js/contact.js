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
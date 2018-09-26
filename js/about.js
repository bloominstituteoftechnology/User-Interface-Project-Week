// Page Load Effect ----------------------------------------
TweenMax.from('.hero', .8, {autoAlpha:0, y:-50, ease: Circ.easeOut,});
TweenMax.from('.hero-copy', .8, {autoAlpha:0, y:100, ease: Circ.easeOut,});

let tl = new TimelineMax();
tl.from('.founding', .4, {delay: .8 , autoAlpha:0, y:-20, ease: Circ.easeOut,});
tl.from('#founders', .4, {autoAlpha:0, y:-20, ease: Circ.easeOut,});  
tl.from('#smithpic', .8, {autoAlpha:0, y:100, ease: Circ.easeOut,});


// Page Scroll Animations ---------------------------------------
let tween3 = TweenMax.from('#sscard', .8, {autoAlpha:0, y:-100, ease: Circ.easeOut,});

let tween4 = TweenMax.from('#jonespic', .8, {autoAlpha:0, y:100, ease: Circ.easeOut,});

let tween5 = TweenMax.from('#jjcard', .8, {autoAlpha:0, y:-100, ease: Circ.easeOut,});

let tween6 = TweenMax.from('.press', .8, {autoAlpha:0, y:100, ease: Circ.easeOut,});

// init ScrollMagic Controller
let controller = new ScrollMagic.Controller();

// let scene1 = new ScrollMagic.Scene({
// triggerElement: '.hero-copy',
// offset: 420,
// }).setTween(tween1);

// let scene2 = new ScrollMagic.Scene({
// triggerElement: '#founders',
// offset:100,
// }).setTween(tween2);

let scene3 = new ScrollMagic.Scene({
triggerElement: '#smithpic',
offset: 200,
}).setTween(tween3);

let scene4 = new ScrollMagic.Scene({
triggerElement: '#sscard',
offset: 200,
}).setTween(tween4);

let scene5 = new ScrollMagic.Scene({
triggerElement: '#jonespic',
offset: 100,
}).setTween(tween5);

let scene6 = new ScrollMagic.Scene({
triggerElement: '#jjcard',
offset: 250,
}).setTween(tween6);

controller.addScene([
    // scene1, 
    // scene2, 
    scene3, 
    scene4,
    scene5,
    scene6
]);


// Image Replacement on Mobile -----------------------------------
window.addEventListener('resize', function() {
    let width = window.innerWidth;
    let bkgd = document.querySelector('.hero');

    if (width <= 500) {
        bkgd.style.backgroundImage = "url('../img/about/about-mobile-jumbotron.png')";
    }
    else if (width > 500) {
        bkgd.style.backgroundImage = "url('../img/about/about-jumbotron.png')";
    }
})
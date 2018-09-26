// Page Load Effect ----------------------------------------
TweenMax.from('.hero', 1, {autoAlpha:0, y:-200, ease: Circ.easeOut,});
TweenMax.from('.hero-copy', 1, {autoAlpha:0, y:300, ease: Circ.easeOut,});

// Page Scroll Animations ---------------------------------------
let tween1 = TweenMax.from('#top1', .8, {autoAlpha:0, x:-200, ease: Circ.easeOut,});

let tween2 = TweenMax.from('#top2', .8, {autoAlpha:0, x:200, ease: Circ.easeOut,});

let tween3 = TweenMax.from('#recentprojects', .8, {autoAlpha:0, x:-50, ease: Circ.easeOut,});  

let tween4 = TweenMax.from('#Villas', .8, {autoAlpha:0, x:-100, ease: Circ.easeOut,});

let tween5 = TweenMax.from('#project1', .8, {autoAlpha:0, x:50, ease: Circ.easeOut,});

let tween6 = TweenMax.from('#Outskirts', .8, {autoAlpha:0, x:100, ease: Circ.easeOut,});

let tween7 = TweenMax.from('#project2', .8, {autoAlpha:0, x:-50, ease: Circ.easeOut,});

let tween8 = TweenMax.from('#Blocks', .8, {autoAlpha:0, x:-100, ease: Circ.easeOut,});

let tween9 = TweenMax.from('#project3', .8, {autoAlpha:0, x:50, ease: Circ.easeOut,});

// init ScrollMagic Controller
let controller = new ScrollMagic.Controller();

let scene1 = new ScrollMagic.Scene({
triggerElement: '.hero-copy',
offset: 500,
}).setTween(tween1);

let scene2 = new ScrollMagic.Scene({
triggerElement: '#top1',
offset: 150,
}).setTween(tween2);

let scene3 = new ScrollMagic.Scene({
triggerElement: '#top2',
offset: 120,
}).setTween(tween3);

let scene4 = new ScrollMagic.Scene({
triggerElement: '#recentprojects'
}).setTween(tween4);

let scene5 = new ScrollMagic.Scene({
triggerElement: '#recentprojects'
}).setTween(tween5);

let scene6 = new ScrollMagic.Scene({
triggerElement: '#project1',
offset: 400,
}).setTween(tween6);

let scene7 = new ScrollMagic.Scene({
triggerElement: '#project1',
offset: 400
}).setTween(tween7);

let scene8 = new ScrollMagic.Scene({
    triggerElement: '#project2',
    offset: 390,
}).setTween(tween8);

let scene9 = new ScrollMagic.Scene({
    triggerElement: '#project2',
    offset: 390
}).setTween(tween9);

controller.addScene([
    scene1, 
    scene2, 
    scene3, 
    scene4,
    scene5,
    scene6,
    scene7,
    scene8,
    scene9,
]);

// Image Replacement on Mobile -----------------------------------
window.addEventListener('resize', function() {
    let width = window.innerWidth;
    let bkgd = document.querySelector('.hero');
    let blueprint = document.querySelector('#image1');
    let reflection = document.querySelector('#image2');
    let villas = document.querySelector('#Villas');
    let outskirts = document.querySelector('#Outskirts');
    let blocks = document.querySelector('#Blocks');

    if (width <= 500) {
        bkgd.style.backgroundImage = "url('../img/home/home-mobile-jumbotron.png')";
        blueprint.src = "./img/home/home-mobile-img-1.png";
        reflection.src = "./img/home/home-mobile-img-2.png";
        villas.src = "./img/home/home-mobile-villas-img.png";
        outskirts.src = "./img/home/home-mobile-outskirts-img.png";
        blocks.src = "./img/home/home-mobile-the-blocks-img.png";
    }
    else if (width > 500) {
        bkgd.style.backgroundImage = "url('../img/home/home-jumbotron.png')";
        blueprint.src = "./img/home/home-img-1.png";
        reflection.src = "./img/home/home-img-2.png";
        villas.src = "./img/home/home-villas-img.png";
        outskirts.src = "./img/home/home-outskirts-img.png";
        blocks.src = "./img/home/home-the-blocks-img.png";
    }
})
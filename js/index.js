// JS goes here

// navigation
const hamburger = document.querySelector('.nav-img');
const navbar = document.querySelector('.hidden');
let open = false;

hamburger.addEventListener('click', () => open === false ? openNav() : closeNav());

const openNav = () => {

    hamburger.src = "img/nav-hamburger-close.png";
    open = true;

    TweenMax.staggerFrom('div.hidden li', 2, {
        cycle: {
            y: [100, -100],
        }, autoAlpha: 0, ease: Power2.easeInOut
    }, 0.2);
    navbar.style.display = 'block';
};

const closeNav = () => {
    navbar.style.display = 'none';
    hamburger.src = "img/nav-hamburger.png";
    open = false;
}

// animations

TweenMax.from('html', 3, {opacity: 0});

let controller = new ScrollMagic.Controller();

let scene1 = new ScrollMagic.Scene({
    triggerElement: "#trigger-element1",
    reverse: false,
})
    .setTween(TweenMax.staggerFrom(('div.left-text'), 1, { cycle: { y: [-50] }, autoAlpha: 0, ease: Power2.easeInOut }, 0.1))
    .addTo(controller);

let scene2 = new ScrollMagic.Scene({
    triggerElement: "#trigger-element2",
    // reverse: false,
})
    .setTween(TweenMax.staggerFrom(('div.right-text'), 1, { cycle: { y: [50] }, autoAlpha: 0, ease: Power2.easeInOut }, 0.1))
    .addTo(controller);

let scene6 = new ScrollMagic.Scene({
    triggerElement: "#trigger-element6",
    //  reverse: false,
})
    .setTween(TweenMax.staggerFrom(('section.bottom-content .top-h2'), 1, { cycle: { y: [-50] }, autoAlpha: 0, ease: Power2.easeInOut }, 0.1))
    .addTo(controller);

let scene3 = new ScrollMagic.Scene({
    triggerElement: "#trigger-element3",
    //  reverse: false,
})
    .setTween(TweenMax.staggerFrom(('div.top-third'), 1, { cycle: { y: [50] }, autoAlpha: 0, ease: Power2.easeInOut }, 0.1))
    .addTo(controller);


let scene4 = new ScrollMagic.Scene({
    triggerElement: "#trigger-element4",
    //  reverse: false,
})
    .setTween(TweenMax.staggerFrom(('div.middle-third'), 1, { cycle: { y: [50] }, autoAlpha: 0, ease: Power2.easeInOut }, 0.1))
    .addTo(controller);


let scene5 = new ScrollMagic.Scene({
    triggerElement: "#trigger-element5",
    // reverse: false,
})
    .setTween(TweenMax.staggerFrom(('div.bottom-third'), 1, { cycle: { y: [-50] }, autoAlpha: 0, ease: Power2.easeInOut }, 0.1))
    .addTo(controller);
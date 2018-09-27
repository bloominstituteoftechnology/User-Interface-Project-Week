// JS goes here

// navigation
const hamburger = document.querySelector('.nav-img');
const navbar = document.querySelector('.hidden');
let open = false;

hamburger.addEventListener('click', () => open === false ? openNav() : closeNav());

const openNav = () => {

    hamburger.src = "img/nav-hamburger-close.png";
    open = true;
    tl
        .staggerFrom('div.hidden li', 1, {
            cycle: {
                y: [-50],
            }, autoAlpha: 0, ease: Power2.easeInOut
        }, 0.1);
    navbar.style.display = 'block';
};

const closeNav = () => {
    navbar.style.display = 'none';
    hamburger.src = "img/nav-hamburger.png";
    open = false;
}

// animations
var tl = new TimelineLite();

let controller = new ScrollMagic.Controller();


let scene1 = new ScrollMagic.Scene({
    triggerElement: "#trigger-element1"
})
.setTween(tl.staggerFrom(('div.left-text'), 1, { cycle: { y: [-50] }, autoAlpha: 0, ease: Power2.easeInOut }, 0.1));


let scene2 = new ScrollMagic.Scene({
    triggerElement: "#trigger-element2"
})
.setTween(tl.staggerFrom(('div.right-text'), 1, { cycle: { y: [-50] }, autoAlpha: 0, ease: Power2.easeInOut }, 0.1));

let scene6 = new ScrollMagic.Scene({
    triggerElement: "#trigger-element6"
})
.setTween(tl.staggerFrom(('section.bottom-content .top-h2'), 1, { cycle: { y: [-50] }, autoAlpha: 0, ease: Power2.easeInOut }, 0.1));

let scene3 = new ScrollMagic.Scene({
    triggerElement: "#trigger-element3"
})
.setTween(tl.staggerFrom(('div.top-third'), 1, { cycle: { y: [-50] }, autoAlpha: 0, ease: Power2.easeInOut }, 0.1));


let scene4 = new ScrollMagic.Scene({
    triggerElement: "#trigger-element4"
})
.setTween(tl.staggerFrom(('div.middle-third'), 1, { cycle: { y: [-50] }, autoAlpha: 0, ease: Power2.easeInOut }, 0.1));


let scene5 = new ScrollMagic.Scene({
    triggerElement: "#trigger-element5"
})
.setTween(tl.staggerFrom(('div.bottom-third'), 1, { cycle: { y: [-50] }, autoAlpha: 0, ease: Power2.easeInOut }, 0.1));


controller.addScene([scene1, scene2, scene3, scene4, scene5, scene6]);
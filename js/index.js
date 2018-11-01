// Nav Vars
const navBtn = document.querySelectorAll('.nav-menu-btn');
const navOpen = document.querySelector('.open');
const navClose = document.querySelector('.close');
const nav = document.querySelector('nav');
let navLinks = document.querySelectorAll('.nav-link');
const topBar = document.querySelector('.topbar');
const logo = document.querySelector('.logo');
const jumboH1 = document.querySelector('.jumbotron h1');

// Nav expanding and retracting
navBtn.forEach( (item) => {
    item.addEventListener('click', () => {
        TweenLite.from(nav, .4, {
            lineHeight: 0,
            opacity: 0,
            height: 0
        })
        nav.classList.toggle('nav-display-toggle'); 
        navOpen.classList.toggle('display-toggle');
        navClose.classList.toggle('display-toggle');
        navLinks.forEach( (link) => link.classList.toggle('display-toggle'));
    })
})

function sectionWipe () { 
    let controller = new ScrollMagic.Controller({
        globalSceneOptions: {
            triggerHook: 'onLeave'
        }
    });

    // get all slides
    let slides = document.querySelectorAll(".home-bottom");

    // create scene for every slide
    for (let i=0; i<slides.length; i++) {
        new ScrollMagic.Scene({
                triggerElement: slides[i]
            })
            .setPin(slides[i])
            // .addIndicators() // add indicators (requires plugin)
            .addTo(controller);
    }
};

sectionWipe();

TweenLite.from('#jumbo-line1', 0.8, {
    opacity: 0,
    ease: Power1.easeInOut,
})

TweenLite.from('#jumbo-line2', 0.8, {
    opacity: 0,
    ease: Power1.easeInOut,
    delay: 0.7
})

TweenLite.from('#jumbo-line3', 0.8, {
    opacity: 0,
    ease: Power1.easeInOut,
    delay: 1.4
})
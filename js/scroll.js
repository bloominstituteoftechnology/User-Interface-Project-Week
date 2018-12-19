// scroll animation:
let controller = new ScrollMagic.Controller();
let scene1 = new ScrollMagic.Scene({
    triggerElement: "#trigger1",
    offset: 200
}).setTween(TweenMax.fromTo("#animate1", 1.5, {opacity: 0}, {opacity: 1}))
scene1.addTo(controller);

let scene2 = new ScrollMagic.Scene({
    triggerElement: "#trigger2"
}).setTween(TweenMax.fromTo("#animate2", 1.5, {opacity: 0}, {opacity: 1}))
scene2.addTo(controller);
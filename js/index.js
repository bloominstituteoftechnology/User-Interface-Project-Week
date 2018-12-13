// JS goes here

let controller = new ScrollMagic.Controller();


let scene1 = new ScrollMagic.Scene({
    triggerElement: '#trigger1'
}).setTween(TweenMax.to('#animate1', .5, {y: '-20%', opacity: .1, ease:Power0.easeNone}))
.addIndicators({name: "First trigger"})
.addTo(controller);

let scene2 = new ScrollMagic.Scene({
    triggerElement: '#trigger2'
}).setTween(TweenMax.to('#animate2', .5, {y: '-20%', opacity: .1, ease:Power0.easeNone}))
.addIndicators({name: "Second trigger"})
.addTo(controller);

let scene3 = new ScrollMagic.Scene({
    triggerElement: '#trigger3'
}).setTween(TweenMax.to('#animate3', .5, {y: '-20%', opacity: .1, ease:Power0.easeNone}))
.addIndicators({name: "third trigger"})
.addTo(controller);

let scene4 = new ScrollMagic.Scene({
    triggerElement: '#trigger4'
}).setTween(TweenMax.to('#animate4', .5, {y: '-20%', opacity: .1, ease:Power0.easeNone}))
.addIndicators({name: "fourth trigger"})
.addTo(controller);

let scene5 = new ScrollMagic.Scene({
    triggerElement: '#trigger5'
}).setTween(TweenMax.to('#animate5', .5, {y: '-20%', opacity: .1, ease:Power0.easeNone}))
.addIndicators({name: "fifth trigger"})
.addTo(controller);



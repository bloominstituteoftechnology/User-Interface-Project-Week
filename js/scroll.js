// Scrolling Animations

var controller = new ScrollMagic.Controller();

var first = new ScrollMagic.Scene({triggerElement: "#trigger1"})
.setTween("#animate1", .5, {opacity: "1"})
.addTo(controller);

var second = new ScrollMagic.Scene({triggerElement: "#trigger2"})
.setTween("#animate2", .5, {opacity: "1"})
.addTo(controller);

var third = new ScrollMagic.Scene({triggerElement: "#trigger3"})
.setTween("#animate3", .5, {opacity: "1"})
.addTo(controller);

var second = new ScrollMagic.Scene({triggerElement: "#trigger4"})
.setTween("#animate4", .5, {opacity: "1"})
.addTo(controller);
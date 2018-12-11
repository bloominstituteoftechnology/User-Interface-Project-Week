const controller = new ScrollMagic.Controller();

const firstItem = new ScrollMagic.Scene({
    triggerElement: "#item1",
    reverse: false
})
.setClassToggle('.item', 'fade-in')
.addIndicators({name: "first trigger"})
.addTo(controller);

const secondItem = new ScrollMagic.Scene({
    triggerElement: "#item2",
    reverse: false
})
.setClassToggle('#item2', 'fade-in')
.addIndicators({name: "seccond trigger"})
.addTo(controller);

const thirdItem = new ScrollMagic.Scene({
    triggerElement: "#item3",
    reverse: false
})
.setClassToggle('#item3', 'fade-in')
.addIndicators({name: "third trigger"})
.addTo(controller);

const fourthItem = new ScrollMagic.Scene({
    triggerElement: "#item4",
    reverse: false
})
.setClassToggle('#item4', 'fade-in')
.addIndicators({name: "fourth trigger"})
.addTo(controller);
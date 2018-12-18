const controller = new ScrollMagic.Controller();

const firstItem = new ScrollMagic.Scene({
    triggerElement: "#item1",
})
.setClassToggle('.item', 'fade-in')
.addTo(controller);

const secondItem = new ScrollMagic.Scene({
    triggerElement: "#item2",
})
.setClassToggle('#item2', 'fade-in')
.addTo(controller);

const thirdItem = new ScrollMagic.Scene({
    triggerElement: "#item3",
})
.setClassToggle('#item3', 'fade-in')
.addTo(controller);

const fourthItem = new ScrollMagic.Scene({
    triggerElement: "#item4",
})
.setClassToggle('#item4', 'fade-in')
.addTo(controller);
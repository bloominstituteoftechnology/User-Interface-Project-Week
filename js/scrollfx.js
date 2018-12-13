const controller = new ScrollMagic.Controller();

const scrollGroup = new ScrollMagic.Scene({
    triggerElement: "#scrollGroup",
});
scrollGroup.setClassToggle('.scrollGroup', 'fade-in');
scrollGroup.addTo(controller);

const scrollBlock1 = new ScrollMagic.Scene({
    triggerElement: "#scrollBlock1",
});
scrollBlock1.setClassToggle('#scrollBlock1', 'fade-in');
scrollBlock1.addTo(controller);

const scrollBlock2 = new ScrollMagic.Scene({
    triggerElement: "#scrollBlock2",
});
scrollBlock2.setClassToggle('#scrollBlock2', 'fade-in');
scrollBlock2.addTo(controller);

const scrollBlock3 = new ScrollMagic.Scene({
    triggerElement: "#scrollBlock3",
})
scrollBlock3.setClassToggle('#scrollBlock3', 'fade-in');
scrollBlock3.addTo(controller);
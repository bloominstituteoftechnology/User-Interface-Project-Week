const controller = new ScrollMagic.Controller();


const scrollGroup1Animation = TweenMax.to(".scrollGroup1", 1, {
    y: 0,
    opacity: 1
});

const scrollGroup1 = new ScrollMagic.Scene({
    triggerElement: ".scrollGroup1",
});
scrollGroup1.setClassToggle('.scrollGroup1', 'fade-in');
scrollGroup1.setTween(scrollGroup1Animation);
scrollGroup1.addTo(controller);


const scrollGroup2Animation = TweenMax.to(".scrollGroup2", 1, {
    y: 0,
    opacity: 1
});

const scrollGroup2 = new ScrollMagic.Scene({
    triggerElement: ".scrollGroup2",
});
scrollGroup2.setClassToggle('.scrollGroup2', 'fade-in');
scrollGroup2.setTween(scrollGroup2Animation);
scrollGroup2.addTo(controller);


const scrollGroup3Animation = TweenMax.to(".scrollGroup3", 1, {
    y: 0,
    opacity: 1
});

const scrollGroup3 = new ScrollMagic.Scene({
    triggerElement: ".scrollGroup3",
});
scrollGroup3.setClassToggle('.scrollGroup3', 'fade-in');
scrollGroup3.setTween(scrollGroup3Animation);
scrollGroup3.addTo(controller);


const scrollGroup4Animation = TweenMax.to(".scrollGroup4", 1, {
    y: 0,
    opacity: 1
});

const scrollGroup4 = new ScrollMagic.Scene({
    triggerElement: ".scrollGroup4",
});
scrollGroup4.setClassToggle('.scrollGroup4', 'fade-in');
scrollGroup4.setTween(scrollGroup4Animation);
scrollGroup4.addTo(controller);
function sectionWipe() {
  let controller = new ScrollMagic.Controller({
    globalSceneOptions: {
      triggerHook: "onLeave"
    }
  });

  let slides = document.querySelectorAll(".home-bottom");

  for (let i = 0; i < slides.length; i++) {
    new ScrollMagic.Scene({
      triggerElement: slides[i]
    })
      .setPin(slides[i])
      // .addIndicators()
      .addTo(controller);
  }
}

sectionWipe();

TweenLite.from("#jumbo-line1", 0.8, {
  opacity: 0,
  ease: Power1.easeInOut
});

TweenLite.from("#jumbo-line2", 0.8, {
  opacity: 0,
  ease: Power1.easeInOut,
  delay: 0.7
});

TweenLite.from("#jumbo-line3", 0.8, {
  opacity: 0,
  ease: Power1.easeInOut,
  delay: 1.4
});

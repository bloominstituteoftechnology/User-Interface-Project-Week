  // ___________________GSAP


  TweenMax.from('.jumbo', 1.5, {opacity:0});

  TweenMax.from('.cta-text', 1, {opacity:0, delay:.5});

  TweenMax.from('.menu-bar', 1.5, {opacity:0, scale:3, delay:0});

  TweenMax.from('.jumbo', 1.5, {scale:0});

  TweenMax.staggerFrom('h1', 1, {scale:0, delay:.5}, 0.2);

//   TweenMax.staggerFrom('.format-middle', .8, {scale:0, ease:Back.easeOut.config(1), delay:1}, 0.2);

  TweenMax.staggerFrom('.format-middle', 1, {opacity:0, scale:.5, delay:1.5, y: 300});

  TweenMax.from('.header', 1, {opacity:0, scale:.5, delay:1});

  TweenMax.staggerFrom('.tabs-link', 1, {opacity:0, scale:.5, delay:1, ease:Back.easeOut, y: -80}, .2);

//   TweenMax.from('.tabs-item', 1, {opacity:0, scale:.5, delay:1, y:-100}, 1);








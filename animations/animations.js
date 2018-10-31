
  
// HOME PAGE ANIMATIONS

  const timeLine = new TimelineMax();
    timeLine.from('.logo', 1, {scale:0},0);
    timeLine.from('.menu-button', 1, {opacity:0, scale: 3},0);
    timeLine.staggerFromTo('.text-block', 2, {x:30, opacity:0}, {x:0, opacity:1, ease:Power1.easeOut}, .2);
    
    window.addEventListener('scroll', function(event) {
            TweenLite.fromTo('.btn', 0.3, {x:-1}, {x:1, ease:RoughEase.ease.config({strength:8, points:20, template:Linear.easeNone, randomize:false}) , clearProps:"x"})
            // const timeLine = new TimelineMax();
            // timeLine.staggerFromTo('.blueprint', 4, {x:1000, opacity:0}, {x:0, opacity:1, ease:Power1.easeOut}, 2);
          });

    const villasImg = document.querySelector('.vhouse-img');
          villasImg.addEventListener('mouseover', function(event) {
            timeLine.staggerFromTo('.villas', 2, {x:30, opacity:0}, {x:0, opacity:1,}, .2);
              // const timeLine = new TimelineMax();
              // timeLine.staggerFromTo('.blueprint', 4, {x:1000, opacity:0}, {x:0, opacity:1, ease:Power1.easeOut}, 2);
            });

    const outImg = document.querySelector('.out-img');
        outImg.addEventListener('mouseover', function(event) {
            timeLine.staggerFromTo('.outskirts', 2, {x:-30, opacity:0}, {x:0, opacity:1,}, .2);
            // const timeLine = new TimelineMax();
            // timeLine.staggerFromTo('.blueprint', 4, {x:1000, opacity:0}, {x:0, opacity:1, ease:Power1.easeOut}, 2);
        });

    const blockImg = document.querySelector('.bloc-img');
        blockImg.addEventListener('mouseover', function(event) {
            timeLine.staggerFromTo('.blocks', 2, {scale: 1}, {scale: 1.1}, .2);
            // const timeLine = new TimelineMax();
            // timeLine.staggerFromTo('.blueprint', 4, {x:1000, opacity:0}, {x:0, opacity:1, ease:Power1.easeOut}, 2);
            });


// SERVICES PAGE ANIMATIONS



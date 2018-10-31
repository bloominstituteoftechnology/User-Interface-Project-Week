
  
//   window.addEventListener('load', function(event) {
//     console.log('first event');
//   });
          
        // staggerFromTo('.text-block', 1, {autoAlpha: 0, x:-133}, 
        //     {x: 0, autoAlpha: 1, ease:Power1.easeOut}, 0.1);
//   timeLine.from('.articles', 1, {opacity:0, scale: 0});
        // timeLine.from('.text-block', 2, {x:-400});
   
  const timeLine = new TimelineMax();
    timeLine.from('.logo', 1, {scale:0},0);
    timeLine.from('.menu-button', 1, {opacity:0, scale: 3},0);
    timeLine.staggerFromTo('.text-block', 2, {x:30, opacity:0}, {x:0, opacity:1, ease:Power1.easeOut}, .2);
            
            
    const menuButton = document.querySelector('.menu-button');
        menuButton.addEventListener('click', function(event) {
            const timeLine = new TimelineMax();
            timeLine.staggerFromTo('.blueprint', 4, {x:1000, opacity:0}, {x:0, opacity:1, ease:Power1.easeOut}, 2);
          });
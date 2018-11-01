

const timeLine = new TimelineMax();
    timeLine.from('.logo', 1, {scale: 0, ease:Bounce.easeOut});
    timeLine.staggerFromTo('.jumbo-graphic', 1.5, {x:30, opacity:0}, {x:0, opacity:1, ease:Power1.easeOut});
    
    



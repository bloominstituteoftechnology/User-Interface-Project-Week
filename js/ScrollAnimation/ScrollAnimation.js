// window.addEventListener('scroll')

const tl = new TimelineLite( {paused: true} );

$(window).scroll( function(){
  const st = $(this).scrollTop();
  const ht = $( '.container' ).height();
   if( st < ht && st > 0 ){
        windowScroll = st/ht;
        tl.progress( windowScroll );
    }
});

header = document.querySelector('.recent-projects h3');

TweenMax.from(header, .2, {opacity:0, xPercent: 50});

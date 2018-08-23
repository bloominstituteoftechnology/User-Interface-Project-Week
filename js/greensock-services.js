
(function($) {

  var options = $('[data-choice]');
  option = Array.from(options);

var tl = new TimelineMax();
  tl.from(option[0], 1, {autoAlpha: 0, y:50, onStart: nameChange, onComplete: nameChange  })
  .from(option[1], 1, {opacity: 0, y:50 }, "-=.2")
  .from(option[2], 1, {autoAlpha: 0, y:60, ease:Power4.easeOut }, "-=.5")
  .from(option[3], 1, {opacity: 0, y:70, ease:Elastic.easeOut, onComplete: nameChange }, "-=.6")
  .staggerFrom(options, 1, {cycle: { x:[20, -20] } } )

  function nameChange() {
    // console.log('simple test purposes. eventually, using closures would be cool');
    // console.log(this.target.innerText);
  }

  // .fromTo(img, 2, {width: 800}, {width: 400, rotation: 360})
  // .from(h2, 1, {opacity: 0, scale: 3}, "+=1")
})(jQuery)

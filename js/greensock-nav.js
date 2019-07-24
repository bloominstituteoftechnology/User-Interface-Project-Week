
(function($) {

  var nav = $('.nav-bar')[0]
  var links = $('a')
  var hamburger = $('.hamburger')[0]
  var logo = $('.logo')

  hamburger.addEventListener('click', () => {
    var tlLinks = new TimelineMax();
    if (nav.classList.length === 2) {
      TweenMax.to(nav, .8,  {opacity:.92, height: window.innerHeight})

      tlLinks.add('start')
      .from(links[0], 1.3, {opacity: 0, x:-400}, {opacity: 1})
      .from(links[1], 1, {opacity: 0, x:-400}, {opacity: 1}, 'start')
      .from(links[2], .8, {opacity: 0, x:-400}, {opacity: 1}, 'start')
      // .from(links[3], .6, {opacity: 0, x:-400}, {opacity: 1}, 'start')
    } else {
      TweenMax.to(nav, .8, {height: 50})
      TweenMax.fromTo(hamburger, .8, {opacity: 0}, {opacity: 1})
      // TweenMax.fromTo(logo, .8, {opacity: 0}, {opacity: 1})
    }


}
)


})(jQuery)

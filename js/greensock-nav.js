
(function($) {

  var nav = $('.nav-bar')[0]
  var links = $('a')
  var hamburger = $('.hamburger')[0]
  var logo = $('.logo')

  hamburger.addEventListener('click', () => {
    var tlLinks = new TimelineMax();
    if (nav.classList.length === 2) {
      TweenMax.fromTo(nav, 1, {opacity: 0, height: "auto"}, {opacity:.92, height: window.innerHeight})

      tlLinks.add('start')
      .from(links[0], 1.6, {opacity: 0, x:-400}, {opacity: 1})
      .from(links[1], 1.3, {opacity: 0, x:-400}, {opacity: 1}, 'start')
      .from(links[2], 1, {opacity: 0, x:-400}, {opacity: 1}, 'start')
      .from(links[3], .7, {opacity: 0, x:-400}, {opacity: 1}, 'start')
    } else {
      TweenMax.to(nav, 1, {height: 50})
      TweenMax.fromTo(hamburger, 1, {opacity: 0}, {opacity: 1})
      TweenMax.fromTo(logo, 1, {opacity: 0}, {opacity: 1})
    }


}
)


})(jQuery)

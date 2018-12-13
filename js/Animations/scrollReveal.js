ScrollReveal({ reset: true,  duration: 900, }).reveal('.project');
ScrollReveal({ reset: true,  duration: 900, }).reveal('.middle-content--1');
ScrollReveal({ reset: true,  duration: 900, }).reveal('.middle-content--2');

AOS.init();

TweenLite.from('.main-content-heading', .5, {
    opacity: 0,  
    ease: Power4.easeIn
  });

TweenLite.from('.services-heading', .5, {
    opacity: 0,  
    ease: Power4.easeIn
});

TweenLite.from('.contact-heading', .5, {
    opacity: 0,  
    ease: Power4.easeIn
});
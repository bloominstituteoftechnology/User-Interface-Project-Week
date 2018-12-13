// JS goes here
const hamburger = document.querySelector('.hb-btn');
const navLinks = document.querySelector('nav');


hamburger.addEventListener('click', ()=>{
    // TweenMax.to(navLinks, 1, {className:'+=show-nav'});
    // TweenMax.to(navLinks, 1, {className:'-=hidden'});
    // navLinks.classList.toggle('show-nav');
    // navLinks.classList.toggle('hidden');
    hamburger.style.zIndex="5";
    if(navLinks.classList.contains('show-nav')){
        console.log('running')
        TweenMax.from(navLinks, 2, {className:"-=show-nav"});
        TweenMax.to(navLinks, 2, {className:"+=hidden"});
        hamburger.src="img/nav-hamburger.png"
    } else{
        console.log('running2')
        TweenMax.from(navLinks, 1, {className:"-=hidden"});
        TweenMax.to(navLinks, 1, {className:"+=show-nav"});
        hamburger.src="img/nav-hamburger-close.png"
    }
});

// Tween Max - TweenMax.to(target, duration, {vars: Property we're animating. Can adjust ease properties here})
// TweenFrom - Tween this target from whatever you define.
// Special Properties: Delay, Ease, 
// TweenMax.staggerFrom - Add a stagger amount to end of code which will stagger the animation.
// Fire a function - onComplete: function will occur. 
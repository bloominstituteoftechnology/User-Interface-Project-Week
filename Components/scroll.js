let lastScrollTop = 0;

window.addEventListener("scroll", function(){
   let st = window.pageYOffset || document.documentElement.scrollTop; 
   if (st > lastScrollTop){
    TweenMax.set('body',{scale:"1.1"});
   } else {
    TweenMax.set('body',{scale:"1"});
    window.pageYOffset = '0';
    menu.style.top = '0';
    nav.style.zIndex = '4';
   }
   lastScrollTop = st <= 0 ? 0 : st; // For negative scrolling
}, false);
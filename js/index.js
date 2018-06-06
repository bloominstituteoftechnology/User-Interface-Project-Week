// JS goes here
let scroll = document.querySelector('.header__menu');

window.addEventListener('scroll', function(e) {
    // console.log(scroll.style.backgroundColor);
    if(e.path[1].scrollY > 210){
        scroll.style.backgroundColor = '#5c788f';
        scroll.style.marginTop = '0';
        scroll.style.opacity = '0.9';

    }else{
        scroll.style.backgroundColor = 'transparent';
        scroll.style.opacity = '1';
        scroll.style.marginTop = '3rem';
    }
});

var tl = new TimelineLite({paused:true});
tl.from('.header__menu--logo', 0.5, {left:"-=60px", ease:Back.easeOut})
  .from('.header__text', 0.5, {width:"0px", alpha:0}, "-=0.2")
//   .staggerFrom('.header__text', 0.5, {top:"-=30px", rotation:"-40deg", alpha:0, scale:1.8, ease:Back.easeOut}, 0.2);
tl.restart();
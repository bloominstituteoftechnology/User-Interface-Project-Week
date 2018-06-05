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
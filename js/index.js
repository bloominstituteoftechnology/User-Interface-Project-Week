// JS goes here
let scroll = document.querySelector('.header__menu');

window.addEventListener('scroll', function(e) {
    // console.log(scroll.style.backgroundColor);
    if(e.path[1].scrollY > 210){
        scroll.style.backgroundColor = '#808080ad'
        scroll.style.marginTop = '0'
        scroll.style.opacity = '0.8'

    }else{
        scroll.style.backgroundColor = 'transparent'
        scroll.style.opacity = '1'
        scroll.style.marginTop = '3rem'        
        
    }
});
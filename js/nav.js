let shown = false;

let slide = function(){
    if(shown === false){
        TweenMax.to(menu, .3, {
            scaleY: 1,
            transformOrigin: "50% 0"
        })
        shown = true;
    }
    else{
        TweenMax.to(menu, .3, {
            scaleY: 0,
            transformOrigin: "50% 0"
        })
        console.log('check');
        shown = false;
    }
    open.classList.toggle('hidden');
    closed.classList.toggle('hidden');
}


const menu = document.querySelector('nav');
const open = document.querySelector('.mb-open');
const closed = document.querySelector('.mb-close');
open.addEventListener('click', () => slide());
closed.addEventListener('click', () => slide());
let shown = false;

let slide = function(){
    let tog = menu.classList.toggle('hidden');
    if(shown === false){
        TweenMax.to(menu, delay, {
            scaleY: 1,
            transformOrigin: "50% 0"
            
        })
        shown = true;
        tog();
    }
    else{
        TweenMax.to(menu, delay, {
            scaleY: 0,
            transformOrigin: "50% 0"
        })
        shown = false;
        setTimeout(tog(), 3000);
    }
    open.classList.toggle('hidden');
    closed.classList.toggle('hidden');
    
}


const menu = document.querySelector('nav');
const open = document.querySelector('.mb-open');
const closed = document.querySelector('.mb-close');
const delay = .3;
open.addEventListener('click', () => slide());
closed.addEventListener('click', () => slide());
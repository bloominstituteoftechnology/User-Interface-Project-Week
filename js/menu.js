let menu = document.querySelector("#menu");
let headrMenu = document.querySelector('#headrMenu');
let isOpen = false;
let time = 1;
headrMenu.addEventListener('click', (e) =>{
    // menu.classList.toggle('menu--display');
    e.target.classList.toggle('header__menu--photo--close');
    if(isOpen){
        TweenMax.to(menu, time, {display: 'none', opacity: 0, height: '0vh', width: '0vh', borderRadius: '50%'});
    }else if(!isOpen){
        TweenMax.to(menu, time, {display: 'block', opacity: 1, height: '100vh', width: '110vw', borderRadius: '5%'});
    }
    isOpen = !isOpen;
});
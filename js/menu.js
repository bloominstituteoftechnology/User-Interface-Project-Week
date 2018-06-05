let menu = document.querySelector("#menu");
let headrMenu = document.querySelector('#headrMenu');
let isOpen = false;
let time = 1;
headrMenu.addEventListener('click', (e) =>{
    // menu.classList.toggle('menu--display');
    e.target.classList.toggle('header__menu--photo--close');
    if(isOpen){
        TweenMax.to(menu, time, {display: 'none', opacity: 0});
    }else if(!isOpen){
        TweenMax.to(menu, time, {display: 'block', opacity: 1});
    }
    isOpen = !isOpen;
});


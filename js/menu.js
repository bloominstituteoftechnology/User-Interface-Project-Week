let menu = document.querySelector("#menu");
let menuLink = document.querySelectorAll(".center a");
console.log(menuLink);
let headrMenu = document.querySelector('#headrMenu');
let isOpen = false;
let time = 1;
headrMenu.addEventListener('click', (e) =>{
    // menu.classList.toggle('menu--display');
    e.target.classList.toggle('header__menu--photo--close');
    console.log(e.clientY + 20)
    if(isOpen){
        TweenMax.to(menu, time, {display: 'none', opacity: 0, height: '0vh', width: '1vw', borderRadius: '50%', x: e.clientX, y: (e.clientY - 10)});
    }else if(!isOpen){
        TweenMax.set(menu, {display: 'block', opacity: 1, height: '100vh', width: '110vw', borderRadius: '0%', x: '0%', y: 0});
        TweenMax.from(menu, time, { opacity: 0, height: 0, width: 0, borderRadius: '50%', x: e.clientX, y: (e.clientY + 20)});
        TweenMax.staggerFrom(menuLink, time/2, {delay: 0.5, opacity: 0, cycle:{
            rotationX: [-90, 90],
            transformOrigin:['50% top', "50% bottom"]
        } }, 0.1)
    }
    isOpen = !isOpen;
});
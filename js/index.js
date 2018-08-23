// JS goes here
let hamburger = document.querySelector('.nav-button');
let unclicked = true;
let menuHeader = document.querySelector('.menu-header');
let menuButton = document.querySelector('.nav-button');
hamburger.addEventListener('click',()=>{
    document.querySelector('.menu-content').classList.toggle('menu--open');
    menuHeader.classList.toggle('menu-header--style');
    menuButton.classList.toggle('menu-button--style');
    document.querySelector('.anchors').classList.toggle('anchors--invis');
    if(unclicked){
        hamburger.setAttribute('src','./img/nav-hamburger-close.png');
        unclicked = false;
    }else{
        hamburger.setAttribute('src','./img/nav-hamburger.png');
        unclicked = true;
    }
})
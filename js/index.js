//nav
const nav = document.querySelector('.nav');
const navMenu = document.querySelector('.nav-menu');
const navImg = document.querySelector('.nav-btn');

navImg.addEventListener('click',() => {
    navMenu.classList.toggle('hide')
    nav.classList.toggle('nav-expand')
    if(navImg.src === 'file:///C:/Users/Brandon/School/User-Interface-Project-Week/img/nav-hamburger-close.png'){
    navImg.src = 'img/nav-hamburger.png';
}
else{
    navImg.src = 'img/nav-hamburger-close.png'
}
    
  
})
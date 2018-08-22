// JS goes here
// document.querySelectorAll(".cta-service .btn")

console.log(document.querySelector('.hamburger'));  

let hamburger = document.querySelector('.hamburger');
let menu = document.querySelector('.menu')

hamburger.addEventListener('click', (event) => {
    
    menu.classList.toggle('menu-open');
    if(menu.classList.contains('menu-open')){
        menu.style.display = 'block';
        hamburger.src = "img/nav-hamburger-close.png";
    }else{
        hamburger.src = "img/nav-hamburger.png"
        menu.style.display = 'none';
    };
} )


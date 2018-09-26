//   Navigatioon System Design

const toggleMenu = () => {
    menu.classList.toggle('menu--open');
    if(document.querySelector(".menu-button").src = "./img/nav-hamburger.png"){
        document.querySelector(".menu-button").src = "./img/nav-hamburger-close.png"
    }else{
        document.querySelector(".menu-button").src = "./img/nav-hamburger.png"
    }
}

let menu = document.querySelector('.menu');
console.log(menu);

let menuButton = document.querySelector('.menu-button');

menuButton.addEventListener('click', toggleMenu);
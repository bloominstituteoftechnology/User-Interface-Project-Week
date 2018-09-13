// JS goes here

// Navigation button handler
const nav = document.querySelector('.nav');
const navButton = document.querySelector('.nav-button');
const navLinks = document.querySelector('.nav-links');

let fullMenu = false;

navButton.addEventListener('click', () =>{
    nav.classList.toggle('full-nav-bar');

    if(fullMenu){
        navButton.src = "img/nav-hamburger.png";
        fullMenu = !fullMenu;
    }

    else{
        navButton.src = "img/nav-hamburger-close.png";
        fullMenu = !fullMenu;
    }

    let navLinksHeight = ((window.innerHeight - 55 * 2) / window.innerHeight) * 100;
    navLinks.style.height = `${navLinksHeight}vh`;
});
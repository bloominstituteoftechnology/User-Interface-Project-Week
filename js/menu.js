const toggleMenu = () => {
    // Toggle the "menu--open" class on your menu refence. 

    if (menu.classList.value !== 'menu menu--open') {
        menu.classList.toggle('menu--open');
        menuButton.setAttribute('src', './img/nav-hamburger-close.png');
        navWrapper.style.opacity = '0.96';
    }
    else if (menu.classList.value === 'menu menu--open') {
        menu.classList.toggle('menu--open');
        menuButton.setAttribute('src', './img/nav-hamburger.png');    
        navWrapper.style.opacity = '1';
    }
}

// Short notation for document
const doc = document;

const navWrapper= doc.querySelector('.nav-wrapper');
const menu = doc.querySelector('.menu');
const menuButton = doc.querySelector('.menu-button');

menuButton.addEventListener('click', toggleMenu);
  
window.addEventListener('scroll', function() {
    console.log(window.pageYOffset);
    if (window.pageYOffset > 60){
        navWrapper.style.opacity = '0.96';
    }
    else if (window.pageYOffset < 60) {
        navWrapper.style.opacity = '1';

    }
    // const joe = document.querySelector('body').innerHTML = pageYOffset + 'px';
    // console.log(joe);

});
  
  
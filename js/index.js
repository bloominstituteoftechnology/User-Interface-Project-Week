// JS goes here
//toggles the hamB icon
const toggleMenu = () => {
   menu.classList.toggle('menu--open');   
   let closeBtn = document.querySelector('#menu__close');
   closeBtn.addEventListener('click', () => {
        menu.classList.toggle('menu--open');
    }, false);
};



const menu = document.querySelector('.menu');
const hamBimg = document.querySelector('.hamB-img');
hamBimg.addEventListener('click', toggleMenu, false);


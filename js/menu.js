let menu = document.querySelector("#menu");
let headrMenu = document.querySelector('#headrMenu');
headrMenu.addEventListener('click', (e) =>{
    menu.classList.toggle('menu--display');
    e.target.classList.toggle('header__menu--photo--close');
});
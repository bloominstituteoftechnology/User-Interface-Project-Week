// JS goes here

let menu = document.querySelector("#menu");

let headrMenu = document.querySelector('#burger');

headrMenu.addEventListener('click', (e) =>{

    menu.classList.toggle('menu--display');

    e.target.classList.toggle('menu--photo--close');

});
const toggleMenu = () =>{
    menu.classList.toggle("menu-open");
}

let menu = document.querySelector(".menu");
let menuButton = document.querySelector(".menu-button");
let menuClose = document.querySelector(".menu-close");


menuButton.addEventListener('click', (event) => {
    toggleMenu();
});

menuClose.addEventListener('click', (event) => {
   toggleMenu();
});

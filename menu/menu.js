
const toggleMenu= () =>{
    menu.classList.toggle('menu--open');
    if(menu.classList.contains('menu--open')){
        menuButton.src = 'img/nav-hamburger-close.png';
    } else{
        menuButton.src= 'img/nav-hamburger.png';
    }
   
}
console.log(toggleMenu);

const menu= document.querySelector('.menu');

const menuButton = document.querySelector('.menu-button');

menuButton.addEventListener('click', (e) => {
    toggleMenu(e)
}); 



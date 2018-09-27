//------------------
//   Navigation Bar
//------------------

/* 
1.) add a click event listener on hamburger image
2.) when clicked nav style display is turned on || deleted (set to null?)
3.) change the hamburger menu picture to display an X
4.) have the event listener change
*/

fullScreenNav = document.querySelector('nav');
hamburgerMenu = document.querySelector('.hamburger-menu');
navigationBar = document.querySelector('.navigation');
nav = document.querySelector('nav');
function changeImage() {//Changes hamburger menu img to the close img
    
    //Don't judge me to hard on this
    if (hamburgerMenu.src.includes('close')) {
        hamburgerMenu.src = "img/nav-hamburger.png";
    }
    else{
        hamburgerMenu.src = "img/nav-hamburger-close.png";;
    }
}
let openMenu = function(){
    fullScreenNav.classList.toggle('no-display')
    fullScreenNav.classList.toggle('full-screen-nav');
    changeImage();
}
hamburgerMenu.addEventListener('click', openMenu);





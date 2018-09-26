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

let openMenu = function(){
    fullScreenNav.classList.toggle('full-screen-nav');
    hamburgerMenu.src = "img/nav-hamburger-close.png"
}
hamburgerMenu.addEventListener('click', openMenu);





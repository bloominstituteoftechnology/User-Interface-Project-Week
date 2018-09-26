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
function changeImage() {
    console.log(hamburgerMenu.src);
    if (hamburgerMenu.src.includes('close')) {
        hamburgerMenu.src = "img/nav-hamburger.png";
        console.log("match");
    }
    else{
        hamburgerMenu.src = "img/nav-hamburger-close.png";
        console.log("else");
    }
}
let openMenu = function(){
    fullScreenNav.classList.toggle('full-screen-nav');
    changeImage();
}
hamburgerMenu.addEventListener('click', openMenu);





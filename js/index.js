// JS goes here

const toggleMenu = () => {
    
    menu.classList.toggle('overlay');
}

let show = false;

const changeImg = () => {
    if (show === false) {
        menuButton.src = 'img/nav-hamburger-close.png';
        show = true;
    } else {
        menuButton.src = 'img/nav-hamburger.png';
        show = false;
    }
};

  
  
const menu = document.querySelector('.main-nav-extended');

const menuButton = document.querySelector('.hamburger-menu-btn');

menuButton.addEventListener('click', e => {
    changeImg();
    toggleMenu();
    
});

// const menuButton2 = document.querySelector('.x-menu-btn');

// menuButton2.addEventListener('click', e => {
//     menuButton2.setAttribute('src', 'img/nav-hamburger.png')
//     toggleMenu();
    
// });

// function changeImg() {
//     if (image.getAttribute('src') == "img/nav-hamburger.png") {
//         image.src = "img/nav-hamburger-close.png";
//     } else {
//         image.src = "img/nav-hamburger.png"
//     }
// }
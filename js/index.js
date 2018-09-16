// JS goes here

const menu = document.querySelector('.nav img')

function Menu () {
    if (menu.src === 'img/nav-hamburger-close.png') {
        menu.src = 'img/nav-hamburger.png';
    }
    else (menu.src = 'img/nav-hamburger-close.png')
}


menu.addEventListener('click',function() {Menu()})

console.log(menu);

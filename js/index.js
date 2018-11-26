// JS goes here
const toggleMenu = () => {
    navigation.classList.toggle('opened')
}

let toggle = false;

const imageToggle = () => {
    if(toggle === false){
        menuButton.src = 'img/nav-hamburger-close.png'
        toggle = true;
    } else if (toggle === true){
        menuButton.src = 'img/nav-hamburger.png'
        toggle = false;
    }
}

const navigation = document.querySelector('.nav-expanded');
console.log(navigation)
const menuButton = document.querySelector('.menu-open')
console.log(menuButton)

const imageResize = document.querySelectorAll('img');

window.onload = () => {
    if(window.innerWidth > 400){
        imageResize.forEach(x => {
            x.src = x.src.replace('-mobile','');
        })
    }
}



menuButton.addEventListener('click', (e) =>{
    toggleMenu();
    imageToggle();
})
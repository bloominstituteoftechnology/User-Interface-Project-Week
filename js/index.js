// JS goes here

let navButton = document.querySelector('.nav-button');
let navigation = document.querySelector('#navigation');
let isOpen = false;

navButton.addEventListener('click', function(){
    if(isOpen == false){
        navigation.style.display = 'flex';
        navButton.innerHTML = `<img src = './img/nav-hamburger-close.png'></img>`;
        isOpen = true;
    } else {
        navigation.style.display = 'none';
        navButton.innerHTML = `<img src = './img/nav-hamburger.png'></img>`
        isOpen = false;
    }
});
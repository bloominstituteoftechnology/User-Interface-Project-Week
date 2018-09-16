// JS goes here

const menuO = document.querySelector('.open')
const menuC = document.querySelector('.close')

function MenuO () {

        menuO.style.display = 'none';
        menuC.style.display = 'block'; 
}

function MenuC () {
    menuC.style.display = 'none';
    menuO.style.display = 'block';
}


menuO.addEventListener('click',function() {MenuO()})

menuC.addEventListener('click',function() {MenuC()})

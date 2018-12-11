// JS goes here

function openModal() {
    header.classList.toggle('modal--open')
    if(header.classList.contains('modal--open')){
        modal.style.display = 'flex'
        menuBtn.src = "/img/nav-hamburger-close.png"
        body.style.overflow = 'hidden'
    } else {
        modal.style.display = 'none'
        menuBtn.src = "/img/nav-hamburger.png"
        body.style.overflow = ''

    }
}

const header = document.querySelector('.header');
const body = document.querySelector('body')
const modal = document.querySelector('.nav-modal');
const menuBtn = document.getElementById('menuBtn');

menuBtn.addEventListener('click', openModal)


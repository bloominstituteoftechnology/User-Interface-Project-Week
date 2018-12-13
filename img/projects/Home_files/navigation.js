// JS goes here

function openModal() {
    header.classList.toggle('modal--open')
    if(header.classList.contains('modal--open')){
        modal.style.display = 'flex'
        header.style.backgroundColor = '@color-alto'
        TweenLite.from(menuBtn, .3, {
            opacity: 0,
            ease: Power4.easeIn
        });
        TweenLite.from(modal, .2, {
            opacity: 0,
            ease: Power4.easeIn
        });
        TweenLite.from(header, .3, {
            opacity: 0,
            ease: Power4.easeIn
        });
        menuBtn.src = "/img/nav-hamburger-close.png"
        body.style.overflow = 'hidden'
    } else {
        modal.style.display = 'none'
        TweenLite.from(header, .1, {
            opacity: 0,
            ease: Power4.easeIn
        });
        TweenLite.from(menuBtn, .3, {
            opacity: 0,
            ease: Power4.easeIn
        });
        TweenLite.from(modal, .3, {
            opacity: 0,
            ease: Power4.easeIn
        });
        menuBtn.src = "/img/nav-hamburger.png"
        body.style.overflow = ''
        

    }
}

const header = document.querySelector('.header');
const body = document.querySelector('body')
const modal = document.querySelector('.nav-modal');
const menuBtn = document.getElementById('menuBtn');

menuBtn.addEventListener('click', openModal)


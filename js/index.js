// JS goes here

const toggleDrop = () => {
    if (dd.classList.contains('dropdown--open')) {
        TweenMax.to(dd, .5, {top: -700, opacity: 0, onComplete: () => {dd.classList.remove('dropdown--open')}});
        ddButton.src = 'img/nav-hamburger.png';
        console.log(dd);
    } else {
        TweenMax.to(dd, .5, {top: 0, opacity: .9, onComplete: dd.classList.add('dropdown--open')});
        ddButton.src = 'img/nav-hamburger-close.png';
        console.log(dd);
    }
}

const dd = document.querySelector('.dropdown');

const ddButton = document.querySelector('.hamburger');

ddButton.addEventListener('click', function(event) {
    return toggleDrop();    
}); 
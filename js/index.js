//sticky top nav bar
let nav = document.querySelector('.menu-bar');

window.addEventListener('scroll', navScroll);

function navScroll() {
    if (window.scrollY === 0) {
        nav.classList.remove('nav-colored');
    } else {
        nav.classList.add('nav-colored');
    }
}

//Menu items toggle
let menu = document.querySelector('.menu-items');
let hamburgerBtn = document.querySelector('.hamburger');
let hamBtn = 'img/nav-hamburger.png';
let xSrc = 'img/nav-hamburger-close.png';

hamburgerBtn.addEventListener('click', function(){
    menu.classList.toggle('flex');
    if (hamburgerBtn.getAttribute('src') === hamBtn){
        hamburgerBtn.setAttribute('src', xSrc);
        console.log(hamburgerBtn.getAttribute('src'));
    } else {
        hamburgerBtn.setAttribute('src',hamBtn);
        console.log(hamburgerBtn.getAttribute('src'));
    }
});


 
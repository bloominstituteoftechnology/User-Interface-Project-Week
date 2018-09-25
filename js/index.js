// JS goes here


let hamburgerTag = document.querySelector('#hamburger');
let hamburgerCloseTag = document.querySelector('#hamburgerClose');
let navLinkTag = document.querySelector('.navLink');

hamburgerTag.addEventListener('click', navClassToggle);
hamburgerCloseTag.addEventListener('click', navClassToggle);

function navClassToggle() {
    hamburgerTag.classList.toggle('disappear');
    hamburgerCloseTag.classList.toggle('disappear');
    navLinkTag.classList.toggle('disappear');
}

// JS goes here

let hamburger = document.querySelector('.hamOpen');
let hamClose = document.querySelector('.hamClose');
let links = document.querySelector('.links');
let nav = document.querySelector('.nav');

console.log(links);

hamburger.addEventListener('click', () => {
    hamburger.style.display = 'none';
    hamClose.style.display = 'block';
    links.style.display = 'flex';
    nav.classList.toggle('open');
});

hamClose.addEventListener('click', () => {
    hamburger.style.display = 'block';
    hamClose.style.display = 'none';
    links.style.display = 'none';
    nav.classList.toggle('open');
})
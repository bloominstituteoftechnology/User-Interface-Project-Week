const ham = document.querySelector('.open');
const hamClose = document.querySelector('.close');
const menuLinks = document.querySelector('.menu-links');

ham.addEventListener("click", function(event) {
    console.log('You opened a thing!');
    event.stopPropagation();
    menuLinks.classList.toggle('menu-links');
    ham.classList.toggle('close');
    hamClose.classList.toggle('close');
});

hamClose.addEventListener('click', function(event) {
    console.log('You closed a thing');
    event.stopPropagation();
    menuLinks.classList.toggle('menu-links');
    ham.classList.toggle('close');
    hamClose.classList.toggle('close');
});
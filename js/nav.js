const hamburger = document.querySelector('#hamburger');
const closeButton = document.querySelector('#navigation-close');
const navLinks = document.querySelector('.navigation-links');
const navPages = document.querySelectorAll('.navigation-link');

hamburger.addEventListener("click", function(event) {
    console.log('BUTTON CLICKED');
    event.stopPropagation();
    navLinks.classList.add('navigation-links-selected');
    hamburger.classList.toggle('btn-toggle');
    closeButton.classList.toggle('btn-toggle');
});

closeButton.addEventListener('click', function(event) {
    console.log('CLOSE CLICKED');
    event.stopPropagation();
    navLinks.classList.remove('navigation-links-selected');
    hamburger.classList.toggle('btn-toggle');
    closeButton.classList.toggle('btn-toggle');
});

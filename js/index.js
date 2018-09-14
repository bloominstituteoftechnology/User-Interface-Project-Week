const hamburger = document.querySelector('.hamburger');
const header = document.querySelector('.header');
const links = document.querySelector('.links');
const close = document.querySelector('.close');

const expandMenu = (event) => {
    header.classList.toggle('expand');

    if (links.style.display === 'block') {
    links.style.display = 'none';
    } else {
        links.style.display = 'block';
    }

    if (close.style.display === 'block') {
        close.style.display = 'none';
        hamburger.style.display = 'block';
    } else {
        close.style.display = 'block';
        hamburger.style.display = 'none';
    }
}

hamburger.addEventListener('click', expandMenu);
close.addEventListener('click', expandMenu);
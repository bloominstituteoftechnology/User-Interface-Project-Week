const hamburger = document.querySelector('.hamburger');
const header = document.querySelector('.header');
const links = document.querySelector('.links');

const expandMenu = (event) => {
    header.classList.toggle('expand');
    if (links.style.display === 'block') {
    links.style.display = 'none';
    } else {
        links.style.display = 'block';
    }
}

hamburger.addEventListener('click', expandMenu);
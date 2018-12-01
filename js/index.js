const toggleMenu = () => {
    overlay.classList.toggle('overlay--open')
}

const overlay = document.querySelector('.overlay');
const hamburgerButton = document.querySelector('.hamburger-button');

hamburgerButton.addEventListener('click', toggleMenu);

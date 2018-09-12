function init() {
    let navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('hide');

    let navButtons = document.querySelectorAll('.nav-button');
    Array.from(navButtons).forEach(navButton => navButton.addEventListener('click', () => navLinks.classList.toggle('hide')));
}

window.addEventListener('load', init());
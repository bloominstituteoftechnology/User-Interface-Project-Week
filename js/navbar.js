const navButton = document.querySelector('.nav-button');
const navDisplay = document.querySelector('nav');

navButton.addEventListener('click', () => {
    navDisplay.classList.toggle("nav-open");
})
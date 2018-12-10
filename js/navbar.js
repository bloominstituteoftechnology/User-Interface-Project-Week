const navButton = document.querySelector('.navbar .navcontent .navbutton');
const navDisplay = document.querySelector('nav');

navButton.addEventListener('click', () => {
    navDisplay.classList.toggle("nav-open");
})
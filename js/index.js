// JS goes here

const hamButton = document.querySelector('.ham-button');
const hamButtonClose = document.querySelector('.ham-button-close');
const mainNav = document.querySelector('.main-nav');

hamButton.addEventListener('click', () => {
	mainNav.classList.add('main-nav-show');
	hamButton.style.display = 'none';
	hamButtonClose.style.display = 'block';
});

hamButtonClose.addEventListener('click', ()=> {
	mainNav.classList.remove('main-nav-show');
	hamButton.style.display = 'block';
	hamButtonClose.style.display = 'none';
});
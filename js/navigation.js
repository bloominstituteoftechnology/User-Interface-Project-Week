const menu = document.querySelector('.button-content');
const menuButton = document.querySelector('.menu-button');

menuButton.addEventListener('click', () => {
	menu.classList.toggle('menu--open');
});

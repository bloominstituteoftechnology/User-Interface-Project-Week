// JS goes here

const toggleMenu = () => {
	menu.classList.toggle("menu--open");

}

const menu = document.querySelector('.menu-content');

const menuButton = document.querySelector('.menu-button');

menuButton.addEventListener('click', () => {
	toggleMenu();
	console.log("button was clicked")
});




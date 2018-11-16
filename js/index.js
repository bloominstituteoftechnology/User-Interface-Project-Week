// JS goes here

const toggleMenu = () => {
	menu.classList.add("menu--open");

}

const closeMenu = () => {
	menu.classList.remove("menu--open");
}

const menu = document.querySelector('.menu-content');

const menuButton = document.querySelector('.menu-button');

const closeButton = document.querySelector('.close-button')

menuButton.addEventListener('click', () => {
	toggleMenu();
	console.log("button was clicked")
});

closeButton.addEventListener('click', () => {
	closeMenu();
	console.log('menu closed')
});




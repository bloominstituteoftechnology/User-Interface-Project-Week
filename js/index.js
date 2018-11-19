// // JS goes here


const openMenu = () => {
	menu.classList.add("menu--open");
}

const closeMenu = () => {
	menu.classList.remove("menu--open");
}

const menu = document.querySelector('.menu-content');

//  const close = document.querySelector('.the-closure');

const menuButton = document.querySelector('.menu-button');

const closeButton = document.querySelector('.close-button')

menuButton.addEventListener('click', () => {
	openMenu();
	document.querySelector(".close-button").style.display = "block";
	document.querySelector(".menu-button").style.display = "none";
	console.log("menu button was clicked")
});

closeButton.addEventListener('click', () => {
	closeMenu();
	document.querySelector(".close-button").style.display = "none";
	document.querySelector(".menu-button").style.display = "block";
	console.log('menu closed')
});





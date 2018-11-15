// JS goes here

//menu
const toggleMenu = () => {
	// console.log(menu)
	menu.classList.toggle('nav--open')
}

const menu = document.querySelector(".nav_contain");
// console.log(menu);
const menuButton = document.querySelector('.main_nav_buttons');
// console.log(menuButton);

menuButton.addEventListener('click', toggleMenu)
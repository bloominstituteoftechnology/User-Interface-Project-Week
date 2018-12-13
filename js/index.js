const toggleMenu = () => {
	navButton.classList.toggle('change');
};

const menu = document.querySelector('.menu');

const menuButton = document.querySelector('.menu-icon');

const navButton = document.querySelector('.nav-menu');

const page = document.querySelector('.container');

menuButton.addEventListener('click', () => {
	toggleMenu();
});
console.log(navButton);

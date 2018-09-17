const navImages = document.querySelectorAll('.navbar img');
const navOpenButton = navImages[0];
const navCloseButton = navImages[1];
const navItems = document.querySelector('.nav-items');
const navbar = document.querySelector('nav');
navOpenButton.addEventListener('click', () => {
	navItems.classList.add('nav-show');
	navOpenButton.classList.remove('selected');
	navOpenButton.classList.add('not-selected');
	navCloseButton.classList.remove('not-selected');
	navCloseButton.classList.add('selected');
	navbar.classList.add('full-height');
});
navCloseButton.addEventListener('click', () => {
	navItems.classList.remove('nav-show');
	navOpenButton.classList.add('selected');
	navOpenButton.classList.remove('not-selected');
	navCloseButton.classList.add('not-selected');
	navCloseButton.classList.remove('selected');
	navbar.classList.remove('full-height');
});
document.addEventListener('scroll', () => {
	navbar.classList.add('scrolled');
	if (window.scrollY === 0) {
		navbar.classList.remove('scrolled');
	}
});

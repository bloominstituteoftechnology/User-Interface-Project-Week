window.onscroll = function fixNav() {
	let navBar = document.querySelector('.navbar-main-header');

	let stickyMenu = document.querySelector('.navbar-menu-links');

	let scrollPosY = window.pageYOffset;

	if (scrollPosY > 100) {
		navBar.classList.add('sticky');
		stickyMenu.style.paddingTop = '8%';
	}
};

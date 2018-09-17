// JS goes here

//Navigation

const navButton = document.querySelector('.menu');
const anchors = document.querySelectorAll('a');

let closedHamburger = true;

anchors.forEach(a => {
	a.style.display = 'none';
});

const hamburgerHandler = function() {
	if(closedHamburger) {
		document.getElementbyClass('hamburger').src = './img/nav-hamburger-close.png';

		anchors.forEach(a => {
			a.style.display = '';
		});

		closedHamburger = false;
	} else {
		document.getElementbyClass('hamburger').src = './img/nav-hamburger.png';

		anchors.forEach(a => {
			a.style.display = 'none';
		});

		closedHamburger = true;
	}
};

navButton.addEventListener('click', hamburgerHandler);
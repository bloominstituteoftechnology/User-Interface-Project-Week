// Componenet
class Dropdown {
	constructor(element) {
		this.element = element;
		this.button = this.element.querySelector('.menu-button');
		this.content = this.element.querySelector('.button-content');
		this.button.addEventListener('click', () => {
			this.toggleContent();

			console.log('okay!');
		});
	}
	// unToggle() {
	// 	this.content.classList.toggle('button-hidden');
	// 	document.querySelector('.menu-x').style.display = 'none';
	// 	document.querySelector('.menu-bar').style.display = 'block';
	// }
	toggleContent() {
		this.content.classList.toggle('button-hidden');
		document.querySelector('.menu-bar').style.display = 'none';
		document.querySelector('.menu-x').style.display = 'block';
	}
}

let dropdowns = document.querySelectorAll('.menu-content').forEach((mustafa) => new Dropdown(mustafa));

// Tackle

class Close {
	constructor(term) {
		this.term = term;
	}
	selectClose() {
		this.content.classList.toggle('button-hidden');
		document.querySelector('.menu-x').style.display = 'none';
		document.querySelector('.menu-bar').style.display = 'block';
	}
}
// const content = document.querySelector('.button-content');
// const dropdown = document.querySelector('.menu-bar');
// const closeDropdown = document.querySelector('.menu-x');
// const open = () => {
// 	content.classList.add('open');
// };
// const close = () => {
// 	content.classList.remove('open');
// };

// dropdown.addEventListener('click', () => {
// 	open();
// 	document.querySelector('.menu-x').style.display = 'block';
// 	document.querySelector('.menu-bar').style.display = 'none';
// });

// closeDropdown.addEventListener('click', () => {
// 	close();
// 	document.querySelector('.menu-x').style.display = 'none';
// 	document.querySelector('.menu-bar').style.display = 'block';
// });

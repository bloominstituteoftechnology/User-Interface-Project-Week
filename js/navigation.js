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

	toggleContent() {
		this.content.classList.toggle('button-hidden');
		document.querySelector('.menu-bar').style.display = 'none';
		document.querySelector('.menu-x').style.display = 'block';
	}
	unToggle() {
		this.content.classList.toggle('button-hidden');
		document.querySelector('.menu-x').style.display = 'none';
		document.querySelector('.menu-bar').style.display = 'block';
	}
}

let dropdowns = document.querySelectorAll('.menu-content').forEach((mustafa) => new Dropdown(mustafa));

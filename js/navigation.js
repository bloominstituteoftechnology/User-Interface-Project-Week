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
	}
}

let dropdowns = document.querySelectorAll('.menu-content').forEach((mustafa) => new Dropdown(mustafa));

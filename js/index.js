class Dropdown {
	constructor(element) {
		this.element = element;
		this.content = this.element.querySelector('.navbar-menu');
		this.openButton = this.element.querySelector('.navbar-toggle-open');
		this.closedButton = this.element.querySelector('.navbar-toggle-closed');

		this.openButton.addEventListener('click', () => {
			this.toggleClosedContent();
		});

		this.closedButton.addEventListener('click', () => {
			this.toggleOpenContent();
		});
	}

	toggleOpenContent() {
		this.content.classList.remove('nav-hidden');
		this.openButton.classList.add('button-hidden');
		this.closedButton.classList.remove('button-hidden');
	}

	toggleClosedContent() {
		this.content.classList.add('nav-hidden');
		this.openButton.classList.remove('button-hidden');
		this.closedButton.classList.add('button-hidden');
	}
}

let dropdowns = document.querySelectorAll('.navbar-toggle');

dropdowns = Array.from(dropdowns).map((dropdown) => new Dropdown(dropdown));

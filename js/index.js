class Dropdown {
	constructor(element) {
		this.element = element;
		// console.log(this.element);

		this.openButton = this.element.querySelector('.navbar-toggle-open');
		// console.log(this.openButton);
		this.closedButton = this.element.querySelector('.navbar-toggle-closed');
		// console.log(this.closedButton);
		this.content = document.querySelector('.navbar-menu');
		// console.log(this.content);

		this.openButton.addEventListener('click', () => {
			this.toggleClosedContent();
		});

		this.closedButton.addEventListener('click', () => {
			this.toggleOpenContent();
		});
	}

	toggleOpenContent() {
		this.content.classList.add('nav-hidden');
		this.openButton.classList.remove('button-hidden');
		this.closedButton.classList.add('button-hidden');
	}

	toggleClosedContent() {
		this.content.classList.remove('nav-hidden');
		this.openButton.classList.add('button-hidden');
		this.closedButton.classList.remove('button-hidden');
	}
}

let dropdowns = document.querySelectorAll('.navbar-toggle');

dropdowns = Array.from(dropdowns).map((dropdown) => new Dropdown(dropdown));

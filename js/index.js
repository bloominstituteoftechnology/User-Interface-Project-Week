const toggleMenu = () => {
	navButton.classList.toggle('change');
};

const menu = document.querySelector('.menu');

const menuButton = document.querySelector('.menu-icon');

const navButton = document.querySelector('.nav-menu');

menuButton.addEventListener('click', () => {
	toggleMenu();
});

class TabLink {
	constructor(element) {
		this.element = element;
		this.data = this.element.dataset.tab;

		this.itemElement = document.querySelector(
			`.tab-item[data-tab="${this.data}"]`,
		);

		this.tabItem = new TabItem(this.itemElement);
		this.element.addEventListener('click', () => this.select());
	}

	select() {
		const links = document.querySelectorAll('.tab-link');

		Array.from(links).forEach(el => {
			el.classList.remove('tab-link-selected');
		});

		this.element.classList.add('tab-link-selected');

		this.tabItem.select();
	}
}

class TabItem {
	constructor(element) {
		this.element = element;
	}

	select() {
		const items = document.querySelectorAll('.tab-item');

		Array.from(items).forEach(el => {
			el.classList.remove('tab-item-selected');
		});

		this.element.classList.add('tab-item-selected');
		console.log(this.element);
	}
}

links = document.querySelectorAll('.tab-link').forEach(el => {
	return new TabLink(el);
});

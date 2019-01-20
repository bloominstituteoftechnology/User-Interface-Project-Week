const toggleMenu = () => {
	navMenu.classList.toggle('fullpage');
	menuIcon.classList.toggle('change');
	navLinks.classList.toggle('show-links');
};

const navLinks = document.querySelector('.nav-links');
const navMenu = document.querySelector('.nav-menu');
const menuIcon = document.querySelector('.menu-icon');

menuIcon.addEventListener('click', () => {
	toggleMenu();
});

class TabLink {
	constructor(element) {
		this.element = element;
		this.data = this.element.dataset.tab;

		this.itemElement = document.querySelector(
			`.tab-item-content[data-tab="${this.data}"]`,
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
		const items = document.querySelectorAll('.tab-item-content');
		Array.from(items).forEach(el => {
			el.classList.remove('.tab-item-content');
		});

		console.log(this.element);
		this.element.classList.add('tab-item-selected');
	}
}

links = document.querySelectorAll('.tab-link').forEach(el => {
	return new TabLink(el);
});

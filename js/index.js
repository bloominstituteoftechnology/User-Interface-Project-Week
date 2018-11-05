// JS goes here
class NavDropdown {
	constructor(element) {
		this.element = element;
		this.button = this.element.querySelector('.nav-button');
		this.content = this.element.querySelector('.nav-content');
		this.closeButton = this.element.querySelector('.close-button')
		this.button.addEventListener('click', (event) => {
			this.toggleContent(event)
		});
		this.closeButton.addEventListener('click', (event) => {
			this.toggleContent(event)
		});
	}
	toggleContent() {
		this.content.classList.toggle('nav-hidden');
		this.button.classList.toggle('img-hide');
		this.closeButton.classList.toggle('img-hide');
	}
}
let navDropdowns = document.querySelectorAll('.nav-bar');
navDropdowns = Array.from(navDropdowns).map(navDropdown => new NavDropdown(navDropdown));
class TabLink {
	constructor(element) {
		this.element = element;
		this.data = this.element.dataset.tab;
		this.itemElement = document.querySelector(`.tabs-item[data-tab='${this.data}']`);
		this.tabItem = new TabItem(this.itemElement);
		this.element.addEventListener('click', (event) => {
			this.select(event)
		});
	};
	select() {
		const links = document.querySelectorAll('.tabs-link');
		Array.from(links).forEach((link) => {
			link.classList.remove('tabs-link-selected')
		});
		this.element.classList.add('tabs-link-selected');
		this.tabItem.select();
	}
}
class TabItem {
	constructor(element) {
		this.element = element;
	}
	select() {
		let items = document.querySelectorAll('.tabs-item');
		Array.from(items).forEach((item) => {
			item.classList.remove('tabs-item-selected')
		});
		this.element.classList.add('tabs-item-selected');
	}
}
let links = document.querySelectorAll('.tabs-link');
links = Array.from(links).map(links => new TabLink(links));
links[0].select();
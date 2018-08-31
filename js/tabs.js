// TABS functionality
class TabLink {
	constructor(element) {
		this.element = element;
		//console.log(this.element);

		this.data = this.element.dataset.tab;
		//console.log(this.data);

		this.item = document.querySelector(
			`.tab-content-item[data-tab="${this.data}"]`
		);
		this.tabItem = new TabItem(this.item);

		this.element.addEventListener('click', () => {
			this.select();
		});
	}

	select() {
		const buttons = document.querySelectorAll('.tabs-btn');

		buttons.forEach((button) => {
			button.classList.remove('active-tab');
		});

		this.element.classList.add('active-tab');

		this.tabItem.select();
	}
}

class TabItem {
	constructor(element) {
		this.element = element;
	}

	select() {
		const items = document.querySelectorAll('.tab-content-item');

		items.forEach((item) => {
			item.classList.remove('tab-content-item-selected');
		});

		this.element.classList.add('tab-content-item-selected');
	}
}

let links = document.querySelectorAll('.tab-btn');
links = Array.from(links).map((link) => new TabLink(link));

links[0].select();

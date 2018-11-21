// JS goes here

class Tabs {
	constructor(content) {
		this.content = content;
		this.tabData = this.content.dataset.tab;

		// if (this.tabData === 'pre') {
		// 	this.tabContent = document.querySelectorAll('.tab-content');
		// } else {
		this.tabContent = document.querySelectorAll(`.tab-content[data-tab='${this.tabData}']`);
		// }
		this.tabContent = Array.from(this.tabContent).map((item) => {
			return new Cards(item);
		});
		this.content.addEventListener('click', () => {
			this.selectTab();
		});
	}
	selectTab() {
		const tabs = document.querySelectorAll('.tab');
		tabs.forEach((tab) => {
			// tab.classList.remove('active-tab');
		});

		const tabContent = document.querySelectorAll('.tab-content');

		tabContent.forEach((item) => {
			item.style.display = 'none';
		});
		// this.content.classList.add('active-tab');
		this.tabContent.forEach((item) => item.selectCard());
	}
}

class Cards {
	constructor(cardItem) {
		this.cardItem = cardItem;
	}
	selectCard() {
		this.cardItem.style.display = 'flex';
	}
}
let tabs = document.querySelectorAll('.tab').forEach((item) => {
	new Tabs(item);
});

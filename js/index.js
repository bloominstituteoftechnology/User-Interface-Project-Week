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

//GreenSock
const topImg = document.querySelector('.top-img');
topImg.addEventListener('mouseover', () => {
	TweenMax.to('.main-page', 3, {
		marginLeft: 400,
		ease: Power4.easeOut
	});
});

const middlePage = document.querySelector('.middle-upper-page');
middlePage.addEventListener('mouseover', () => {
	TweenLite.to('.upper', 3, {
		ease: Power3.easeOut,
		y: -500
	});
});

const lower = document.querySelector('.middle-lower-page');
lower.addEventListener('mouseover', () => {
	TweenLite.to('.desktop', 2.5, {
		ease: Bounce.easeOut,
		y: -700
	});
});

const anotherLower = document.querySelector('.lower-img');
anotherLower.addEventListener('mouseover', () => {
	TweenMax.to('.lower-img', 3, {
		marginLeft: 300,
		ease: Power4.easeOut
	});
});

const text = document.querySelector('.lower-text');
text.addEventListener('mouseover', () => {
	TweenMax.to('.lower-text', 3, {
		marginLeft: 300,
		ease: Power4.easeOut
	});
});

// JS goes here

//menu
const toggleMenu = () => {
	// console.log(menu)
	menu.classList.toggle('nav--open')
}

const closeMenu = () => {
	menu.classList.remove('nav--open')
}

const menu = document.querySelector(".nav_contain");
// console.log(menu);
const menuButton = document.querySelector('.main_nav_buttons');
// console.log(menuButton);

const menuClose = document.querySelector('.navButton')

menuButton.addEventListener('click', toggleMenu)

menuClose.addEventListener('click', closeMenu)



//services js

class TabLink {
	constructor(element) {
		this.element = element;
		this.elementData = this.element.dataset.tab
		// console.log(this.elementData)
		this.itemElementContent = document.querySelector(`.tabs[data-tab = '${this.elementData}']`)
		console.log(this.itemElementContent)
		this.itemElementContent = new TabItem(this.itemElementContent);
		this.element.addEventListener('click', () => {this.select()})
	}
	select() {
		const links = document.querySelectorAll('.tabs-link');
		Array.from(links).forEach((subList) => {
			subList.classList.remove('tabs-link-selected')
		})
		this.element.classList.add('tabs-link-selected')
		// console.log(this.itemElementContent)
		this.itemElementContent.select();

	}
}


class TabItem {
	constructor(element) {
		this.element = element
	}

	select() {
		const items = document.querySelectorAll('.tabs');
		// console.log(items)
		Array.from(items).forEach((subList) => {
			subList.classList.remove('tabs-item-selected');
			// console.log(items)
		})
		// console.log(this.element)
		this.element.classList.add('tabs-item-selected')
	}
}

const links = document.querySelectorAll('.tabs-link').forEach(link => new TabLink(link));
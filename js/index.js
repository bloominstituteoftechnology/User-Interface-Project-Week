const toggleMenu = () => {
	menu.classList.toggle("menu--open");
}

const menu = document.querySelector(".menu");
const menuButton = document.querySelector(".menu-button");
menuButton.addEventListener("click", toggleMenu);

//Service Tabs

class TabLink {
	constructor(element) {
		this.element = element;
		this.data = this.element.dataset.tab;
		this.item = document.querySelector(`.tabs-item[data-tab="${this.data}"]`);
		this.tabItem = new TabItem(this.item);
		this.element.addEventListener("click", () => {this.select() });
	}
	select() {
		const links =document.querySelectorAll("tabs-link");
		links.forEach(link => { link.classList.remove("tabs-link-selected")
	});
		this.element.classList.add("tabs-link-selected");
		this.tabItem.select();
	}
}
class TabItem {
	constructor(element) {
		this.element = element;
	}
	Select() {
		const items = document.querySelectorAll(".tabs-item");
		items.forEach(item => { item.classList.remove("tabs-items-selected");
		})
		this.element.classList.add("tabs-item-selected");
	}
}


let links = document.querySelectorAll(".tabs-link");
links = Array.from(links).map(link => new TabLink(link));




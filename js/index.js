//Tabs
class LinkCreator {
	constructor(linkItem) {
		this.link = linkItem;
		this.link.addEventListener("click", () => {this.linkClick()});

		this.linkData = this.link.dataset.tab;
		this.tabContent =document.querySelector(`.content[data-tab = "${this.linkData}"]`);
		this.tabContent = new Content (this.tabContent);
	}
	linkClick() {
		this.tabContent.toggleContent();
	}
}
class Content {
	constructor(tabContent) {
		this.tabContent = tabContent;
	}
	toggleContent() {
		this.tabContent.classList.toggle("tab-toggle");
	}
}

let links = document.querySelectorAll(".link");
links = Array.from(links).map(linkItem => new LinkCreator(linkItem));


//Nav
class DropNav {
	constructor(navMenu) {
		this.dropdown = navMenu;
		this.button = this.dropdown.querySelector(".nav-button");
		this.content = this.dropdown.querySelector(".nav-items");
		this.button.addEventListener("click", () => {this.toggleContent() });
	}

	toggleContent() {
		this.content.classList.toggle("nav-hidden");
	}
}

let dropdowns = document.querySelectorAll(".nav-menu");
dropdowns = Array.from(dropdowns).map( navMenu => new DropNav(navMenu));






const toggleMenu = () => {
	menu.classList.toggle("menu--open");
}

const menu = document.querySelector(".menu");
const menuButton = document.querySelector(".menu-button");
menuButton.addEventListener("click", toggleMenu);

//Service Tabs

class TabLink {
	constructor(link) {
		this.link = link; //this reps the links
		this.link.addEventListener("click", () => {this.linkClick() }); //putting a click event on the link/element
		this.data = this.link.dataset.tab; //calling the dataset
		this.tabContent = document.querySelector(`.tabs-item[data-tab="${this.data}"]`); //connecting the dataset. e=link, tCont=content
		
		this.tabContent = new Content(this.tabContent); //establishing a new class for the content
		
	}

	linkClick() {
		this.tabContent.toggleContent(); //method to toggle content
		console.log("this works?");
	}
}

class Content {
	constructor(tabContent) {
		this.tabContent = tabContent; //this reps the content
	}
	toggleContent() {
		this.tabContent.classList.toggle('tab-toggle');  //the toggle
	}
}


let links = document.querySelectorAll(".tabs-link"); //grabbing the links themselves
links = Array.from(links).map(link => new TabLink(link)); //making the links into an array for easier access






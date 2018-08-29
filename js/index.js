const toggleMenu = () => {
	menu.classList.toggle("menu--open");
}

const menu = document.querySelector(".menu");
const menuButton = document.querySelector(".menu-button");
menuButton.addEventListener("click", toggleMenu);

//Service Tabs

class TabLink {
	constructor(element) {
		this.element = element; //this reps the links
		this.data = this.element.dataset.tab; //calling the dataset
		this.item = document.querySelector(`.tabs-item[data-tab="${this.data}"]`); //connecting the dataset.e=link, tCont=content
		this.tabItem = new TabItem(this.item); //establishing a new class for the content
		this.element.addEventListener('click', () => { this.select(); //putting a click event on the link/element
		}); 
	};

	select() {
		const links = document.querySelectorAll('.tabs-links');
		links.forEach( link => {
			link.classList.remove('tabs-link-selected') //on the link/element add/remove this class
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
		const items = document.querySelectorAll('.tabs-item');
		items.forEach( item => {
			item.classList.remove('tabs-item-selected');
		})
		this.element.classList.add('tabs-item-selected');
		console.log("Hey!");

	}
}


let links = document.querySelectorAll(".tabs-link"); //grabbing the links themselves
links = Array.from(links).map(link => new TabLink(link)); //making the links into an array for easier access
links[0].select()





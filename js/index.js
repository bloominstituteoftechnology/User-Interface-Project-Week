// JS goes here
// Over lay -- Desktop & Mobile
const hamburgerButton = document.querySelector('.menu-button-open');
const closeButton = document.querySelector('.menu-button-close');
const menu = document.querySelector('.menu');

hamburgerButton.addEventListener('click', function(event){
	     let target = event.target
	     target.classList.add("button-close");
	     closeButton.classList.add('button-open');
         menu.classList.add("menu-open");
          event.stopPropagation();

        
});
closeButton.addEventListener('click', function(event){
	    let target = event.target;
	    hamburgerButton.classList.remove('button-close');
	    target.classList.remove('button-open');
	    menu.classList.remove("menu-open");
});

// Adding .active class to the anchor elements using - components
class Anchorlink {
	constructor(element) {
		this.element = element;
		this.tabNumber = this.element.dataset.tab;
		this.tabElement = document.querySelector(`.tab[data-tab="${this.tabNumber}"]`);
		this.tab = new Tab(this.tabElement);
		this.element.addEventListener('click', () => {this.clickAnchor()});
		console.log(this.tabNumber);
	}

	clickAnchor() {
		const links = document.querySelectorAll('.button');
		links.forEach(function(link){
			return link.classList.remove('selected');
		});
		this.element.classList.add('selected');
		this.tab.clickTabs();
	}
}

class Tab {
	constructor(el) {
		this.el = el;
	}
	clickTabs() {
        const tabs = document.querySelectorAll('.tab');
        tabs.forEach(function(element){
        	 return element.style.display = 'none';
        })

        this.el.style.display = 'block';
	}
}

const serviceButtons = document.querySelector('.services-buttons');
let links = serviceButtons.querySelectorAll("a");

links = Array.from(links).map(link =>new Anchorlink(link));
console.log(links);
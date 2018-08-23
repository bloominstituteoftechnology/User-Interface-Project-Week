// JS goes here
function on() {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("xmarks").style.display = "block";
    document.getElementById("ham").style.display = "none";
    console.log('should display');
}
function off() {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("xmarks").style.display = "none";
    document.getElementById("ham").style.display = "block";
}


class TabLink {
    constructor(element) {
	this.element = element;
	
	// Get the custom data attribute on the Link
	this.data = this.element.dataset.tab;

	// Using the custom data attribute get the associated Item element
	this.itemElement = document.querySelector(`.tabs-item[data-tab="${this.data}"]`);
	
	// Using the Item element, create a new instance of the TabItem class
	this.tabItem = new TabItem(this.itemElement);
	this.tabHeader = new TabHeader(this.itemElement);
	
	// Add a click event listener on this instance, calling the select method on click
	this.element.addEventListener('click', () => {
	    this.select();
	    console.log(`${this.data} selected`);
	});
    };

    select() {
	// Get all of the elements with the tabs-link class
	const links = document.querySelectorAll(`.tabs-link`);
	
	// Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
	Array.from(links).forEach(function(myfunction) {
	    myfunction.classList.remove('tabs-link-selected');
	});
	
	// Add a class named "tabs-link-selected" to this link
	this.element.classList.add('tabs-link-selected');
		
	// Call the select method on the item associated with this link
	this.tabItem.select();
    }
}

class TabItem {
    constructor(element) {
	this.element = element;
    }
    select() {
	// Select all items elements from the DOM
	const items = document.querySelectorAll(`.tabs-item`);
	// Remove the class "tabs-item-selected" from each element
	Array.from(items).forEach(function(items) {
	    items.classList.remove('tabs-item-selected');
	});
	// Add a class named "tabs-item-selected" to this element
	this.element.classList.add('tabs-item-selected');
    }
}

class TabHeader {
    constructor(element) {
	this.element = element;
    }
    select() {
	// Select all items elements from the DOM
	const headers = document.querySelectorAll(`.tabs-header`);
	// Remove the class "tabs-item-selected" from each element
	Array.from(headers).forEach(function(headers) {
	    headers.classList.remove('tabs-header-selected');
	});
	// Add a class named "tabs-item-selected" to this element
	this.element.classList.add('tabs-header-selected');	
    }
}




let links = document.querySelectorAll('.tabs-link');
// let headers = document.querySelectorAll('.tabs-header');
links = Array.from(links).map(element => new TabLink(element));
// headers = Array.from(headers).map(element => new TabHeader(element));
links = Array.from(links);
// headers = Array.from(headers);

links[0].select();

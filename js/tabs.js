//Buttons on Services page

class TabLink {
	constructor
}
// Create a reference to all ".service-button" classes
let tabs = document.querySelectorAll('.service-button');
// Map over the array and convert each tab reference into a new TabLink object.  Pass in the tab object to the Tabs class.
tabs = Array.from(tabs).map(tab => new TabLink(tab));

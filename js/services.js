// JS goes here

//Expanded Nav
const menu = document.querySelector('.menu')
const nav = document.querySelector('.nav')

menu.addEventListener('click', () => {
    nav.classList.add('full-menu');
    menu.src = "img/nav-hamburger-close.png";
});

const close = document.querySelector('.close')

close.addEventListener('click', () => {
    nav.classList.remove('full-menu');
    menu.src = "img/nav-hamburger.png"
});

//Tab Component
class TabLink {
    constructor(element) {
      // Assign this.element to the passed in DOM element
      this.element = element;
  
      // Get the custom data attribute on the Link
      this.data = this.element.dataset.tab;
  
      // Using the custom data attribute get the associated Item element
      this.itemElement = document.querySelector(`.tabs-item[data-tab="${this.data}"]`);
  
      // Using the Item element, create a new instance of the TabItem class
      this.tabItem = new TabItem(this.itemElement);
  
      // Add a click event listener on this instance, calling the select method on click
      this.element.addEventListener('click', () => this.select());
  
    };
  
    select() {
      // Get all of the elements with the tabs-link class
      let links = document.querySelectorAll(".tabs-link").forEach(link => link.classList.remove('tabs-link-selected'));
        
      // Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
       
      // Add a class named "tabs-link-selected" to this link
      this.element.classList.add('tabs-link-selected');
  
      // Call the select method on the item associated with this link
      this.tabItem.select();
    }
  }
  
  class TabItem {
    constructor(element) {
      // Assign this.element to the passed in element
      this.element = element;
    }
  
    select() {
      // Select all ".tabs-item" elements from the DOM
      const items = document.querySelectorAll('.tabs-item');
  
      // Remove the class "tabs-item-selected" from each element
      items.forEach(item => item.classList.remove('tabs-item-selected'));
      // Add a class named "tabs-item-selected" to this element
      this.element.classList.add('tabs-item-selected');
    }
  }
// JS goes here
let links = document.querySelectorAll('.tabs-link');
		links = Array.from(links).map(linkItem => new TabLink(linkItem));
		links[0].select();




    
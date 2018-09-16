// JS goes here
const toggleMenu = () => {
    menu.classList.toggle('menu--open'); 
  }
  const menu = document.querySelector('.menu');
  const menuButton = document.querySelector('.nav-button');
  menuButton.addEventListener('click', toggleMenu);

 const navClose = document.querySelector('.nav-close');
 navClose.addEventListener('click', toggleMenu);

 class TabLink {
    constructor(element) {
      this.element = element;
      
      // Get the custom data attribute on the Link
      this.data = this.element.dataset.tab;
      
      // Using the custom data attribute get the associated Item element
      this.itemElement = document.querySelector(`.tabs-content[data-tab='${this.data}']`);
    
      // Using the Item element, create a new instance of the TabItem class
      this.tabItem = new TabItem(this.itemElement);
  
      // Add a click event listener on this instance, calling the select method on click
      this.element.addEventListener('click', () => {this.select()})
    };
  
    select() {
      // Get all of the elements with the tabs-link class
      const links = document.querySelectorAll('.tab');
  
      // Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
      Array.from(links).forEach(links => {
        links.classList.remove('tab-selected');
      });
  
      // Add a class named "tabs-link-selected" to this link
        this.element.classList.add('tab-selected');
      
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
      const items = document.querySelectorAll('.tabs-content');
      // Remove the class "tabs-item-selected" from each element
      Array.from(items).forEach(items => {
        items.classList.remove('tabs-content-selected');
      });  
      // Add a class named "tabs-item-selected" to this element 
      this.element.classList.add('tabs-content-selected');
    }
  }
  
  
  // START HERE: create a reference to the ".tabs" classes
  let links = document.querySelectorAll('.tab');
  
  // Following the code in the Dropdown file, iterate through the array you created above creating a new instance of the TabLink class for each item. 
  links = Array.from(links).map(link => {
  new TabLink(link);
  })
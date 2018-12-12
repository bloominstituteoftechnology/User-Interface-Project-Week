// JS goes here

class TabLink{
    constructor(element){
      // Assigns this.element to the passed in DOM element
      this.element = element;
      // Gets the custom data attribute on the Link
      this.data = this.element.dataset.tab;
      //Gets the associated Item element using the custom data attribute 
      this.itemElement = document.querySelector(`.tabs-item[data-tab='${this.data}']`);
      // Using the Item element, creates a new instance of the TabItem class
      this.itemElement = new TabItem(this.itemElement);
      // Adds a click event listener on this instance, calling the select method on click
      this.element.addEventListener('click', () => {this.select()});
    };
    select() {
      // Gets all of the elements with the tabs-link class
      const links = document.querySelectorAll('.tabs-link');
      //Removes the 'tabs-link-selected' class from all of the links
      Array.from(links).forEach(links => links.classList.remove('tabs-link-selected'));
      // Adds a class named "tabs-link-selected" to this link
      this.element.classList.add('tabs-link-selected');   
      // Call the select method on the item associated with this link
      this.itemElement.select();
    }
}
  class TabItem {
    constructor(element) {
      // Assigns this.element to the passed in element
      this.element = element;
    }
    select() {
      // Selects all ".tabs-item" elements from the DOM
      const items = document.querySelectorAll('.tabs-item');
      // Removes the class "tabs-item-selected" from each element
      items.forEach(items => items.classList.remove("tabs-item-selected"));
      // Adds a class named "tabs-item-selected" to this element
      this.element.classList.add("tabs-item-selected");
    }
  }

links = document.querySelectorAll('.tabs-link').forEach( element => new TabLink(element));
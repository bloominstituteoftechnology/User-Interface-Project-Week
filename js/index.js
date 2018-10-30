// JS goes here

class TabLink {
    constructor(element) {
      this.element = element;
      
      // Get the custom data attribute on the Link
      this.data = this.element.dataset.tab;
      
      // Using the custom data attribute get the associated Item element
      this.itemElement = document.querySelector(`.tabs-item[data-tab='${this.data}']`);
      
      // Using the Item element, create a new instance of the TabItem class
      this.tabItem = new TabItem (this.itemElement);
      
      // Add a click event listener on this instance, calling the select method on click
      this.element.addEventListener('click', () => { this.select() });
  
    };
  
    select() {
      // Get all of the elements with the tabs-link class
      const links = document.querySelectorAll('.tabs-link');
  
      // Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
      Array.from(links).forEach(function(element) {
        // console.log("hello");
        element.classList.remove('tabs-link-selected');
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
    };
  
    select() {
      // Select all ".tabs-item" elements from the DOM
      // Remove the class "tabs-item-selected" from each element
      // Add a class named "tabs-item-selected" to this element 
  
      const items = document.querySelectorAll('.tabs-item');
      Array.from(items).forEach(function(element) {
        element.classList.remove('tabs-item-selected');
      });
      // console.log('hello')
  
      this.element.classList.add('tabs-item-selected');
    //   TweenLite.to(this.element, .5, {className: "+=tabs-item-selected", ease:Power1.easeOut});
    }
  }


let links = document.querySelectorAll('.tabs-link');
links = Array.from(links).map( link => new TabLink(link));
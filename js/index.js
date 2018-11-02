// JS goes here
const toggleNavOpen = () =>{
    nav.classList.toggle('open');
    //open_button.classList.toggle('close');
    closed_button.classList.toggle('open');
}
 const nav = document.querySelector('.nav');
const open_button = document.querySelector('.non-expanded');
const closed_button = document.querySelector('.expanded');
open_button.addEventListener('click', toggleNavOpen);







class TabLink {
    constructor(element) {
      this.element = element;
      
      // Get the custom data attribute on the Link
      this.data = this.element.dataset.tab;
    //   console.log(this.data);
      // Using the custom data attribute get the associated Item element
      this.itemElement = document.querySelector(`.tabs-item[data-tab='${this.data}']`);
    //   console.log(this.itemElement);
      // Using the Item element, create a new instance of the TabItem class
      this.tabItem = new TabItem (this.itemElement);
      
      // Add a click event listener on this instance, calling the select method on click
      this.element.addEventListener('click', (event) => {this.select(event)})
    };
  
    select(event) {
      // Get all of the elements with the tabs-link class
      let links = document.querySelectorAll('.tabs-link');
  
      // Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
      Array.from(links).forEach(link =>
        link.classList.remove('tabs-link-selected')
        );
  
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
      // Select all ".tabs-item" elements from the DOM
      let blah = document.querySelectorAll('.tabs-item');
      console.log(blah);
      // Remove the class "tabs-item-selected" from each element
      Array.from(blah).forEach(link => link.classList.remove('tabs-item-selected'));
      // Add a class named "tabs-item-selected" to this element 
      this.element.classList.add('tabs-item-selected');
    }
  }
  
  
  // START HERE: create a reference to the ".tabs-link" class
  let links = document.querySelectorAll('.tabs-link');
//   console.log(links);
  // Following the code in the Dropdown file, iterate through the array you created above creating a new instance of the TabLink class for each item. 
  links = Array.from(links).map( link => new TabLink(link));
///////////services////////

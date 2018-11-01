
class TabLink {
    constructor(element) {
      this.element = element;
    //   console.log(this.element);
      // Get the custom data attribute on the Link
      this.data = this.element.dataset.tab;
    //   console.log("This data = ", this.data);
      
      // Using the custom data attribute get the associated Item element
      this.itemElement = document.querySelector(`.tabs-item[data-tab='${this.data}']`);
    //   console.log("associated element", this.itemElement);

      // Using the Item element, create a new instance of the TabItem class
      this.tabItem = new TabItem(this.itemElement);
    //   console.log("new instance of this.tabItem", this.tabItem);
      
      // Add a click event listener on this instance, calling the select method on click
      this.element.addEventListener('click', () => {this.select()});
    };
  
    select() {
      // Get all of the elements with the tabs-link class
      const links = document.querySelectorAll('.tabs-link');
    //   console.log("links", links);
  
      // Using a loop or the forEach method remove the 'tabs-link-selected' 
      // class from all of the links
      Array.from(links).forEach(function(myLink) {myLink.classList.remove("tabs-link-selected")});
  
      // Add a class named "tabs-link-selected" to this link
      this.element.classList.add('tabs-link-selected');
  
      // Call the select method on the item associated with this link
      // this.element.addEventListener('click', () => {this.select()});
      this.tabItem.select();
    }
  }
  
  class TabItem {
    constructor(element) {
      this.element = element;
    }
  
    select() {
      // Select all ".tabs-item" elements from the DOM
      const myItems = document.querySelectorAll('.tabs-item');
    //   console.log("my items", myItems);
    
      // Remove the class "tabs-item-selected" from each element
      Array.from(myItems).forEach(function(myItems) {myItems.classList.remove("tabs-item-selected")});
  
      // Add a class named "tabs-item-selected" to this element 
      this.element.classList.add('tabs-item-selected');
    }
  }
  
  
  // START HERE: create a reference to the ".tabs-link" class
  let links = document.querySelectorAll('.tabs-link');
  
  
  // Following the code in the Dropdown file, iterate through the array you created above creating a new instance of the TabLink class for each item. 
  
  links = Array.from(links).map(link => new TabLink(link));
  console.log(links);
  // DO THIS LAST: Once you have created an array of TabLink instances. call select() on the first item in the array
  links[0].select();
  
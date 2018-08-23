class Button {
    constructor(element) {
      this.element = element;
      
      // Get the custom data attribute on the Link
      this.data = this.element.dataset.tab;
      
      // Using the custom data attribute get the associated Item element
      this.itemElement = document.querySelector(`.tab-content[data-tab='${this.data}']`);
      
      // Using the Item element, create a new instance of the TabItem class
      this.tabItem = new TabItem(this.itemElement);
      
      
      // Add a click event listener on this instance, calling the select method on click
      this.element.addEventListener('click', () => { this.select() });
    };
  
    select() {
      // Get all of the elements with the tabs-link class
      const buttons = document.querySelectorAll('.btn');
      console.log(buttons);
      // Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
      Array.from(buttons).forEach(function(button) {
        button.classList.remove('btn-selected')
      });
      
      // Add a class named "tabs-link-selected" to this link
      this.element.classList.add('btn-selected');
      
      // Call the select method on the item associated with this link
      this.tabItem.select();
      
    }
  }
  
  class TabItem {
    constructor(element) {
      this.itemElement = element;
      
    }
  
    select() {
      // Select all items elements from the DOM
      const items = document.querySelectorAll('.tab-content');
      
      // Remove the class "tabs-item-selected" from each element
      items.forEach(function(item){
        item.classList.remove('tab-content-selected');
      });
      // Add a class named "tabs-item-selected" to this element 
  
      this.itemElement.classList.add("tab-content-selected");
    }
  }
  
  
  // START HERE: create a reference to the ".tabs" classes
  let buttons = document.querySelectorAll('.btn');
  
  // Following the code in the Dropdown file, iterate through the array you created above creating a new instance of the TabLink class for each item. 
  buttons = Array.from(buttons).map(button => new Button(button));
  
  // DO THIS LAST: Once you have created an array of TabLink instances. call select() on the first item in the array
 buttons[0].select();
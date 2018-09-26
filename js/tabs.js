class TabButton {
    constructor(element) {
      this.element = element;
      this.data = this.element.dataset.tab;
      // Using the custom data attribute get the associated Item element
      this.tab = document.querySelector(`.tab-nav-content[data-tab='${this.data}']`);
      
      // Using the Item element, create a new instance of the TabItem class
      
      // Add a click event listener on this instance, calling the select method on click
      this.element.addEventListener('click', () => {
        this.select(event);
      });
  
      this.tab = new TabInfo(this.tab);
    }
  
   select() {
      // Get all of the elements with the tabs-link class
      const tabs = document.querySelectorAll('.tab');
  
      // Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
      Array.from(tabs).forEach(tab => {
        tab.classList.remove('active');
      });
  
      // Add a class named "tabs-link-selected" to this link
      this.element.classList.add('active');
      
      // Call the select method on the item associated with this link
      this.tab.select(); ////////////////////////////////////////////////////////////
    }
  }
  
  class TabInfo {
    constructor(element) {
      this.element = element;
    }
  
    select() {
      // Select all items elements from the DOM
      const contents = document.querySelectorAll('.tab-nav-content');
  
      // Remove the class "tabs-item-selected" from each element
      Array.from(contents).forEach(content => {
        content.classList.add('hide');
      });
      // Add a class named "tabs-item-selected" to this element 
      this.element.classList.remove('hide');
    }
  }
  
  // START HERE: create a reference to the ".tabs" classes
  let buttons = document.querySelectorAll('.tab');
  
  // Following the code in the Dropdown file, iterate through the array you created above creating a new instance of the TabLink class for each item. 
  buttons = Array.from(buttons).map(button =>  new TabButton(button));
  
  // DO THIS LAST: Once you have created an array of TabLink instances. call select() on the first item in the array

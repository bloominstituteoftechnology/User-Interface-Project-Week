// // JS goes here

class TabLink {
    constructor(element) {
      this.element = element;
      this.data = this.element.dataset.tab;
      this.itemElement = document.querySelector(`.tabs-item[data-tab="${this.data}"]`);
      this.tabItem = new TabItem(this.itemElement);
  
      this.element.addEventListener('click', () => 
      this.select());
    };
  
  
    ////////// METHOD!
  // Get all of the elements with the tabs-link class
  // Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
  // Add a class named "tabs-link-selected" to this link
  // Call the select method on the item associated with this link
  
  
  
    select() {
      
      const links = document.querySelectorAll('.tabs-link');
  
      links.forEach((link) => {
      link.classList.remove('tabs-link-selected') //DOM TOKEN LIST ======> remove
      });
  
      this.element.classList.toggle('tabs-link-selected'); //DOM TOKEN LIST ======> add
      this.tabItem.select(); // INVOKING TAB ITEM CLASS?
    }
  }
  
  
  
  
  
  ///////// NEW CLASS 
  
  
  // Assign this.element to the passed in element
  // Select !!!!!all!!!! ".tabs-item" elements from the DOM
  // Remove the class "tabs-item-selected" from each element
  // Add a class named "tabs-item-selected" to this element
  
  class TabItem {
    constructor(element) {
      this.element = element;
    }
  
    select() {
       const items = document.querySelectorAll('.tabs-item');
    
      items.forEach((item) => { 
      item.classList.remove('tabs-item-selected')
      });
      this.element.classList.toggle('tabs-item-selected');
    }
  }
  
  /* START HERE: 
  
  - Select all classes named ".tabs-link" and assign that value to the links variable
  
  - With your selection in place, now chain a .forEach() method onto the links variable to iterate over the DOM NodeList
  
  - In your .forEach() method's callback function, return a new instance of TabLink and pass in each link as a parameter
  
  */
  
  links = document.querySelectorAll('.tabs-link');
  
  links.forEach((link) => {
    return new TabLink(link)
  
  });
  
  
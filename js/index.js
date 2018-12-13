// JS goes here

class Tabs {
    constructor(element) {
      this.element = element;
      // grab the tabs-link nodes
      this.links = this.element.querySelectorAll(".tabs-link");
      // Make a new TabLink for each node
      this.links = this.links.forEach( link => new TabLink(link))
    }
  }
  
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
      this.element.addEventListener("click", () => {
        this.select();
        this.deselect();
      });
    };
  
    select() {
      // Call the select method on the item associated with this link
      this.tabItem.deselect();
      this.tabItem.select();
  
    }
  
    deselect() {
      // Get all of the elements with the tabs-link class
      //let links = document.querySelector(".tabs-link"); redeclaration breaks the functionality?
  
      Array.from(links).forEach( item => item.classList.remove("tabs-link-selected"));
  
      // Add a class named "tabs-link-selected" to this link
      this.element.classList.add("tabs-link-selected");
    }
  }
  
  
  
  class TabItem {
    constructor(element) {
      // Assign this.element to the passed in element
      this.element = element;
    }
  
    select() {
  
      // Add a class named "tabs-item-selected" to this element
      this.element.classList.add("tabs-item-selected");
    }
  
    deselect() {
      // Select all ".tabs-item" elements from the DOM
      const items = document.querySelectorAll(".tabs-item");
  
      // Remove the class "tabs-item-selected" from each element
      Array.from(items).forEach( item => item.classList.remove("tabs-item-selected"));
    }
  }
  
  /* START HERE: 
  
  - Select all classes named ".tabs-link" and assign that value to the links variable
  
  - With your selection in place, now chain a .forEach() method onto the links variable to iterate over the DOM NodeList
  
  - In your .forEach() method's callback function, return a new instance of TabLink and pass in each link as a parameter
  
  */
  
  // This variable links is currently necessarily to enable functionality on deselect for TabLink. Ideally should be
  // written so that this links variable is not here, and the functionality is done by TabLink entirely.
  
  let links = document.querySelectorAll(".tabs-link");
  
  //let tab_components = document.querySelectorAll(".tabs")
  let tab_component = document.querySelector(".tabs");
  
  firstTab = new Tabs(tab_component);


// JS goes here

class TabLink {
    constructor(element) {
      this.element = element;
      
      // Custom data attribute
      this.data = this.element.dataset.tab;
      
      // Item element
      this.itemElement = document.querySelector(`.tabs-item[data-tab="${this.data}"]`);
      
      // New instance of the TabItem class
      this.tabItem = new TabItem(this.itemElement);
      
      // Click Event Listener
      this.element.addEventListener('click', () => {this.select()});
    }
  
    select() {
      // Elements with the tabs-link class
      const links = document.querySelectorAll(".tabs-link");
  
      // Remove 'tabs-link-selected' class from all of the links
      Array.from(links).forEach(function(item){
        item.classList.remove('tabs-link-selected');
      });
  
      // Add a class"tabs-link-selected" 
      this.element.classList.add("tabs-link-selected");
      
      // Call the select method
      this.tabItem.select();
    }
  }
  
  class TabItem {
    constructor(element) {
      this.element = element;
    }
  
    select() {
      // All items elements 
      let item = document.querySelectorAll(".tabs-item");
      // Remove the class "tabs-item-selected" from each element
      Array.from(item).forEach(function(item){
        item.classList.remove('tabs-item-selected');
      })
      // Add a class named "tabs-item-selected" to this element 
      this.element.classList.add("tabs-item-selected");
    }
  }
  
  
  // A reference to the ".tabs" classes
  let links = document.querySelectorAll(".tabs-link");
  
  // Iterate through the array and create new instance.
  links = Array.from(links).map( links => new TabLink(links))
  
  // console.log(links)
 
  links[0].select();
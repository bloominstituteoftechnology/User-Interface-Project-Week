// JS goes here
class TabLink {
    constructor(element) {
      
      this.element = element;
      
      
      this.data = this.element.dataset.tab;
      
    
      this.itemElement = document.querySelector(`.tabs-item[data-tab = '${this.data}']`);
      
      
      this.tabItem = new TabItem(this.itemElement);
      
      
      this.element.addEventListener("click", () => this.select());
    };
  
    select() {
      
      const links = document.querySelectorAll(".tabs-link"); 
  
      
      Array.from(links).forEach(tab => tab.classList.remove("tabs-link-selected")
  
      );
  
      
      this.element.classList.add("tabs-link-selected");
      
      
      this.tabItem.select(this.itemElement);
  
    }
  }
  
  class TabItem {
    constructor(element) {
      
      this.element = element;
    }
  
    select() {
     
      const items = document.querySelectorAll(".tabs-item"); 
  
      
      items.forEach(item => item.classList.remove("tabs-item-selected"));
      
     
      this.element.classList.add("tabs-item-selected");
    }
  }
  
  
  links = document.querySelectorAll(".tabs-link") 
                                     .forEach(link => new TabLink(link));

  //=====NAV

  class Dropdown {
    constructor(element) {
      
      // Assign this.element to the dropdown element
      this.element = element;
      
      // Get the element with the ".dropdown-button" class found in the dropdown element (look at the HTML for context)
      this.button = this.element.querySelector(".dropdown-button");
      
      // assign the reference to the ".dropdown-content" class found in the dropdown element
      this.content = this.element.querySelector(".dropdown-content");
      
      // Add a click handler to the button reference and call the toggleContent method.
      this.button.addEventListener("click", () => this.toggleContent());
    }
  
    toggleContent() {
      
      // Toggle the ".dropdown-hidden" class off and on
      this.content.classList.toggle("dropdown-hidden");
    }
  }
  
  
  // Nothing to do here, just study what the code is doing and move on to the Dropdown class
  let dropdowns = document.querySelectorAll('.dropdown').forEach( dropdown => new Dropdown(dropdown));

  
//   function classToggle() {
//     const navs = document.querySelectorAll('.Navbar__Items')
    
//     navs.forEach(nav => nav.classList.toggle('Navbar__ToggleShow'));
//   }
  
//   document.querySelector('.Navbar__Link-toggle').addEventListener('click', classToggle);
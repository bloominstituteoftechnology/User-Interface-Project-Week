// JS goes here
class TabLink {
    constructor(element) {
      this.element = element;
      
      // Get the custom data attribute on teh Link
      this.data = this.element.dataset.tab;
      // Using the custom data attribute ge tthe associated Item element
      this.item = document.querySelector(`.tabs-item[data-tab="${this.data}"]`);
      // Using the Item element, create a new instance of the TabItem class
      this.tabItem = new TabItem(this.item);
      
      this.element.addEventListener('click', () => {
        // Call the select method you define below
        this.select();
      });
    };
  
    select() {
      // Get all of the elements with the tabs-link class
      const links = document.querySelectorAll('.tabs-link');
  
      // Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
      links.forEach( link => {
        link.classList.remove('tabs-link-selected')
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
    }
  
    select() {
      // Select all ".tabs-item" elements from the DOM
      const items = document.querySelectorAll('.tabs-item');
      // Remove the class "tabs-item-selected" from each element
      items.forEach( item => {
        item.classList.remove('tabs-item-selected');
      })
      // Add a class named "tabs-item-selected" to this element 
      this.element.classList.add('tabs-item-selected');
    }
  }

  // ============================================     DROPDOWN    =============================================================

  class Dropdown {
    constructor(element) {
      // assign this.element to the dropdown element
      this.element = element;
      // assign the ".dropdown-button" class found in the dropdown element (look at the HTML for context)
      this.button = this.element.querySelector('.dropdown-button')
      // assign the reference to the ".dropdown-content" class found in the dropdown element
      this.content = this.element.querySelector('.dropdown-content');
      // Add a click handler to the button reference and call the toggleContent method.
      this.button.addEventListener('click', () => { this.toggleContent() })
      // Instructor note, the reason we must wrap the toggleContent method in an anonymous function is that 'this' in toggleContent
      // would refer to the button, NOT the current instance of the class. 
    }
  
    toggleContent() {
      // Toggle the ".dropdown-hidden" class off and on
      this.content.classList.toggle('dropdown-hidden');
    }
  }
  // Nothing to do here, just study what the code is doing and move on to the Dropdown class
  let dropdowns = document.querySelectorAll('.dropdown').forEach( dropdown => new Dropdown(dropdown));

// ==========================================================================================================================



























let links = document.querySelectorAll('.tabs-link').forEach( link => new TabLink(link));
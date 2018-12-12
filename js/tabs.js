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
      this.element.addEventListener('click', () => this.select());
    };
    select() {
      // Get all of the elements with the tabs-link class
      const links = document.querySelectorAll('.tabs-link');
      // Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
      Array.from(links).forEach( l => l.classList.remove('tabs-link-selected'));
      // Add a class named "tabs-link-selected" to this link
      this.element.classList.add('tabs-link-selected');    
      // Call the select method on the item associated with this link
      this.tabItem.select();
    }
}

class TabItem {
    constructor(element) {
        // Assign this.element to the passed in element
        this.element = element;
    }
    select() {
        // Select all ".tabs-item" elements from the DOM
        const items = document.querySelectorAll('.tabs-item');
        // Remove the class "tabs-item-selected" from each element
        Array.from(items).forEach( i => i.classList.remove('tabs-item-selected'));
        // Add a class named "tabs-item-selected" to this element
        this.element.classList.add('tabs-item-selected');
        this.element.style.animation = "focus-in-contract 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940) both";
    }
}

let links = document.querySelectorAll('.tabs-link');
links.forEach(link => new TabLink(link));
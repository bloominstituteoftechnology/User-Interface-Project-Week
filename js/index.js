// JS goes here
class TabLink {
    constructor(element) {
      // Assign this.element to the passed in DOM element
      // this.element;
      this.element = element;
      // Get the custom data attribute on the Link
      // this.data;
      this.data = this.element.dataset.tab;
      // Using the custom data attribute get the associated Item element
      // this.itemElement;
      this.itemElement = document.querySelector(`.tabs-item[data-tab='${this.data}']`);
      // Using the Item element, create a new instance of the TabItem class
      // this.tabItem;
      this.tabItem = new TabItem(this.itemElement);
      // Add a click event listener on this instance, calling the select method on click
      this.element.addEventListener('click', () => {this.select()});
    };
  
    select() {
      // Get all of the elements with the tabs-link class
      // const links;
      const links = document.querySelectorAll('.tabs-link')
      // Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
     
      
      links.forEach(link => {
        link.classList.remove('tabs-link-selected')
      });
  
      // Add a class named "tabs-link-selected" to this link
      // this.element;
      this.element.classList.add('tabs-link-selected')
      
      // Call the select method on the item associated with this link
      this.tabItem.select()
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
  
      Array.from(items).forEach(item =>
        item.classList.remove('tabs-item-selected')
        );
      // Add a class named "tabs-item-selected" to this element
      this.element.classList.add('tabs-item-selected');
    }
  }

  

  
  const links = document.querySelectorAll('.tabs-link');
  links.forEach( link => new TabLink(link) )

  const openMenu = () => {
      menu.style.height = "100%";
  }

  const closeMenu = () => {
      menu.style.height = "0";
  }
  

  
  const burger = document.querySelector('.ham');
  const chi = document.querySelector('.closeHam')
  const menu = document.querySelector('.menu-bar')
  
  
  burger.addEventListener('click', openMenu);
  chi.addEventListener('click', closeMenu);
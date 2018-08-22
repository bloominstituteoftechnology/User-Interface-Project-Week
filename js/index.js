// JS goes here

// Navigation - Expandable Menu

const toggleMenu = () => {
     menu.classList.toggle('menu--open');
  }

  const collapseButton = () => {
    menuButton.style.display = "none";
    menuClose.style.display = "block";
  }

  
  const expandButton = () => {
    menuButton.style.display = "block";
    menuClose.style.display = "none";
  }
  
  
  const menu = document.querySelector('.menu');
  const menuClose = document.querySelector('.menu-close');

  const menuButton = document.querySelector('.menu-button');
 
  menuButton.addEventListener('click', () => {
    toggleMenu();
    collapseButton();
});

menuClose.addEventListener('click', () => {
    toggleMenu();
    expandButton();
});

  

// Services Page - Tabs

/*
class TabLink {
    constructor(link) {
        this.link = link;

        this.data = this.link.dataset.tab;

        this.itemElement = document.querySelector(`.tab[data-tab="${this.data}"]`);

        this.tabItem = new tabItem(this.Element);

        this.link.addEventListener('click', () => { this.select() }
        );
    };

    select() {
        const links = document.querySelectorAll('.tab');

        Array.from(links).forEach(function(links) {
            links.classList.remove('tab-item-selected');
        });

        this.link.classList.add('tab-item-selected');

        this.tabItem.select();
    }
}

class TabItem {
    constructor(tabItems) {
        this.tabItems = tabItems;
    }

    select() {
        const allItems = document.querySelectorAll('.tab-item');

        Array.from(allItems).forEach(function(allItems) {
            allItems.classList.remove('tab-item-selected');
        });

        this.tabItems.classList.add('tab-item-selected');
    }
}


let links = document.querySelectorAll('.tab');

links = Array.from(links).map( link => new TabLink(link)); */


class TabLink {
    constructor(link) {
      this.link = link;
      
      // Get the custom data attribute on the Link
      this.data = this.link.dataset.tab;
      
      
      // Using the custom data attribute get the associated Item element
      this.itemElement = document.querySelector(`.tab-item[data-tab="${this.data}"]`);
      
      // Using the Item element, create a new instance of the TabItem class
      this.tabItem = new TabItem(this.itemElement);
      
      // Add a click event listener on this instance, calling the select method on click
      this.link.addEventListener('click', () => { this.select() });
  
    };
  
    select() {
      // Get all of the elements with the tabs-link class
      const links = document.querySelectorAll('.tab');
  
      // Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
      Array.from(links).forEach(function(links) {
        links.classList.remove('tab-selected');
      });
  
      // Add a class named "tabs-link-selected" to this link
      this.link.classList.add('tab-selected');
      
      // Call the select method on the item associated with this link
    this.tabItem.select();
     }
  }
  
  class TabItem {
    constructor(tabItems) {
      this.tabItems = tabItems;
    }
  
    select() {
  
      // Select all items elements from the DOM
      const allItems = document.querySelectorAll('.tab-item');
      // Remove the class "tabs-item-selected" from each element
      Array.from(allItems).forEach(function(allItems) {
        allItems.classList.remove('tab-item-selected');
      });
  
      // Add a class named "tabs-item-selected" to this element 
      this.tabItems.classList.add('tab-item-selected');
    }
  }
  
  
  // START HERE: create a reference to the ".tabs" classes
  let links = document.querySelectorAll('.tab');
  
  // Following the code in the Dropdown file, iterate through the array you created above creating a new instance of the TabLink class for each item. 
  links = Array.from(links).map( link => new TabLink(link));
  
  // DO THIS LAST: Once you have created an array of TabLink instances. call select() on the first item in the array
  
  links[0].select();
  
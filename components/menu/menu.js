class Dropdown {
  constructor(element) {
    this.element = element;

    this.button = this.element.querySelector(".menu-button");

    this.content = this.element.querySelector(".hidden-menu-content");

    this.closedBtn = this.element.querySelector(".button-X");

    this.button.addEventListener('click', (event) => {this.toggleContent(event);
    });

    this.closedBtn.addEventListener('click', (event) => {this.toggleContentBack(event);
    });
    
  }

  toggleContent(event) {
    this.content.classList.toggle("hidden-menu-content--open");
    this.button.classList.toggle("menu-button-x");
    this.closedBtn.classList.toggle("button-X-show");
  }

  toggleContentBack(event) {
    this.content.classList.toggle("hidden-menu-content--open");
    this.button.classList.toggle("menu-button");
    this.closedBtn.classList.toggle("button-X");
  }




}

let dropdowns = document.querySelectorAll('.dropdown');
dropdowns = Array.from(dropdowns).map(dropdown => new Dropdown(dropdown));


class TabLink {
  constructor(element) {
    this.element = element;
    
    // Get the custom data attribute on the Link
    this.data = this.element.dataset.tab;
    
    // Using the custom data attribute get the associated Item element
    this.itemElement = document.querySelector(`.tabs-item[data-tab='${this.data}']`);
    
    // Using the Item element, create a new instance of the TabItem class
    this.tabItem = new TabItem(this.itemElement);//(this.tabItem);
    
    // Add a click event listener on this instance, calling the select method on click
    this.element.addEventListener('click', (event) => {this.select(event) });

  };

  select(event) {
    // Get all of the elements with the tabs-link class
    let links = document.querySelectorAll(".tabs-link");

    // Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
    links.forEach(link => link.classList.remove('tabs-link-selected'));

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
    // Select all items elements from the DOM
    // Remove the class "tabs-item-selected" from each element
    // Add a class named "tabs-item-selected" to this element 
    let items = document.querySelectorAll('.tabs-item');

    items.forEach(item => {
      item.classList.remove('tabs-item-selected')
    })
    this.element.classList.add('tabs-item-selected')
  }
}


// START HERE: create a reference to the ".tabs" classes
let links = document.querySelectorAll(".tabs-link");
console.log(links);

// Following the code in the Dropdown file, iterate through the array you created above creating a new instance of the TabLink class for each item. 
links = Array.from(links).map(link => new TabLink(link))

// DO THIS LAST: Once you have created an array of TabLink instances. call select() on the first item in the array
links[0].select();

/*  Creating clickable tabs


1. Create a variable for all the tab links using querySelectorAll (node list). All the tab-links should have a dataset tab to select them separately.
2. Assign that variable to map itself to create an array (which can access all array methods) of all new instances of the class TabLink.
3. Jump up above the code created in 1. Create a class for TabLink.
4. Create constructor with the parameter elements.
5. Assign this.element to element.
6. Use querySelector to get a reference to the current data tab.
7. Create a new variable and assign it to a new instance of the TabContent class.
8. Add an eventListener for clicks on tabs.
9. Create a Select method to select tabs.
10. Within the Select method create a variable for the tab links (same as step 1).
11. Use forEach to deselect all tabs by removing the classList.
12. Add tab-selected to 'this' classList.
13. Call the new instance (using 'this' and the variable created in 7) with the method.
14. Create a class for the Tab content.
15. Create constructor
16 Assign this.element to this.
17. Create a Select method (same method name).
18. Create a variable using querySelectorAll for all content (that also have a current data tab).
19. Use forEach to remove all selected content.
20. Add selected content using this.
21. Finally, jump to the bottom of the code and call the first item in the array with the method.




*/

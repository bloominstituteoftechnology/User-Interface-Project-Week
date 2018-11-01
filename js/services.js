
class TabLink {
  constructor(element) {
    this.element = element;
    // Get the custom data attribute on the Link
    this.data = this.element.dataset.tab;
    // Using the custom data attribute get the associated Item element
    this.itemElement = document.querySelector(`.content[data-tab='${this.data}']`);
    // Using the Item element, create a new instance of the TabItem class
    this.tabItem = new TabItem(this.itemElement);
    // Add a click event listener on this instance, calling the select method on click
    this.element.addEventListener('click', () => {this.select()});
  };

  select() {
    // Get all of the elements with the tabs-link class
    const links = document.querySelectorAll('.tab-button');
    // Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
    Array.from(links).forEach( link => {
      link.classList.remove('tab-button-selected');
    });

    // Add a class named "tabs-link-selected" to this link
    this.element.classList.add('tab-button-selected');

    // Call the select method on the item associated with this link
    this.tabItem.select();
  }
}

class TabItem {
  constructor(element) {
    this.element=element;
  }

  select() {
    // Select all ".tabs-item" elements from the DOM
    const items = document.querySelectorAll('.content');
    Array.from(items).forEach( item => {

      item.classList.remove('content-selected');
    });
    // Remove the class "content-selected" from each element
      this.element.classList.add('content-selected');
    // Add a class named "tabs-item-selected" to this element
  }
}


// START HERE: create a reference to the ".tab-button" class
let links = document.querySelectorAll('.tab-button');

// Following the code in the Dropdown file, iterate through the array you created above creating a new instance of the TabLink class for each item.
links = Array.from(links).map(element => new TabLink(element));

// DO THIS LAST: Once you have created an array of TabLink instances. call select() on the first item in the array

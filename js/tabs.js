
class TabLink {
  constructor(element) {
    this.element = element;
    
    // Get the custom data attribute on the Link
    this.data = this.element.dataset.tab;
    console.log(this.element.dataset);
    
    // Using the custom data attribute get the associated Item element
    this.itemElement = document.querySelector(`.tab-content-container[data-tab='${this.data}']`);
    console.log(this.itemElement);
    // Using the Item element, create a new instance of the TabItem class
    this.tabItem = new TabItem(this.itemElement); //this goes to the constructor TabItem
    
    // Add a click event listener on this instance, calling the select method on click
    this.element.addEventListener('click', () => {this.select()}); // i know you dont need the brackets, but im going to do this as old school as possible
  };

  select() {
    // Get all of the elements with the tabs-link class
    const links = document.querySelectorAll('.tab');

    // Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
    // need to use the .remove function
    Array.from(links).forEach( coollink => {
      coollink.classList.remove('active-tab');
      console.log(coollink); //check if we removed that class, and lets see if i can call it coollink

    });

    // Add a class named "tabs-link-selected" to this link

    //WAIT WHY ARE WE ADDING AND REMOVING? is this supposed to be like selecting and then deselecting? ask daniel.
    this.element.classList.add('active-tab');
    
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
    const tabbyItems = document.querySelectorAll('.tab-content-container');
    // Remove the class "tabs-item-selected" from each element
    Array.from(tabbyItems).forEach(itemEle => itemEle.classList.remove('active-content'));
    // Add a class named "tabs-item-selected" to this element 
    this.element.classList.add('active-content'); //do i need the element keyword? 
    console.log(tabbyItems);
  }
}


// START HERE: create a reference to the ".tabs-link" class
let links = document.querySelectorAll(".tab");
console.log(links);

// Following the code in the Dropdown file, iterate through the array you created above creating a new instance of the TabLink class for each item. 
links = Array.from(links).map( link => new TabLink(link));

// DO THIS LAST: Once you have created an array of TabLink instances. call select() on the first item in the array
links[1].select();
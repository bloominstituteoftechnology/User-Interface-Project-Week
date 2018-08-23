// JS goes here
function openNav() {
  document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}

class TabLink {
  constructor(tablink) {
    this.element = tablink;
    
    
    // Get the custom data attribute on the Topic
    this.data = this.element.dataset.tab;
    // Using the custom data attribute get the associated Item element
    this.item = document.querySelector(`.card[data-tab="${this.data}"]`);
    // Using the Item element, create a new instance of the TabItem class
    this.tabItem = new TabItem(this.item);
    
    this.element.addEventListener('click', () => {
      // Call the select method you define below
      this.select();
    });
  };

  select() {
    // Get all of the elements with the tab class
    const tabs = document.querySelectorAll('.tab');

    // Using a loop or the forEach method remove the 'tab-selected' class from all of the topics
    Array.from(tabs).forEach( tab => {
      tab.classList.remove('tab-selected')
    });

    // Add a class named "tab-selected" to this link
    this.element.classList.add('tab-selected');
    
    // Call the select method on the item associated with this link
    this.tabItem.select();
  }
}

class TabItem {
  constructor(element) {
    this.element = element;
  }

  select() {
    // Select all cards elements from the DOM
    const cards = document.querySelectorAll('.card');
    // Remove the class "card-selected" from each element
    cards.forEach( card => {
      card.classList.remove('card-selected');
    })
    // Add a class named "card-selected" to this element 
    this.element.classList.add('card-selected');
  }
}

// START HERE: create a reference to the ".tab" class
// let topics = document.querySelectorAll('.topics');
let tabs = document.querySelectorAll('.tab');
// Following the code in the Dropdown file, iterate through the array you created above creating a new instance of the TabLink class for each item. 
// topics = Array.from(topics).map( topic => new TopicLink(topic));
tabs = Array.from(tabs).map( tablink => new TabLink(tablink));

// Do this last!!!
tabs[0].select()
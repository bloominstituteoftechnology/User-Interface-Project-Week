
const toggleMenu = () => { 
  menu.classList.toggle("menu--open");
}
  // Toggle the "menu--open" class on your menu refence. 
// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector(".menu");
const button = document.querySelector(".hamex")
// create a reference to the ".menu-button" class
// Using your menuButton reference, add a click handler that calls toggleMenu
button.addEventListener("click", toggleMenu);
// Use an if statement to determine and switch open and closed buttons from hamburger to x
let imageTracker = 'open';
const changeButton = () => {
  let image = document.getElementById("opened");
  if (imageTracker == 'open'){
    image.src='img\\nav-hamburger-close.png';
    imageTracker = 'close';
  }else{
    image.src='img\\nav-hamburger.png';
    imageTracker = 'open';
  }
}
// End of Dropdown Menu
class TabLink {
  constructor(element) {
    // Assign this.element to the passed in DOM element
    this.element = element;
    
    // Get the custom data attribute on the Link
    this.data = this.element.dataset.tab;
    
    // Using the custom data attribute get the associated Item element
    // this.itemElement;
    this.item = document.querySelector(`.tabs-item[data-tab='${this.data}']`);
    // Using the Item element, create a new instance of the TabItem class
    this.tabItem = new TabItem(this.item);
    
    // Add a click event listener on this instance, calling the select method on click
    this.element.addEventListener('click', () => {
      this.select() 
    });
console.log(element);
  };

  select() {
    // Get all of the elements with the tabs-link class
    // const links;
    let links = document.querySelectorAll('.tabs-link');
    // Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
    links.forEach((items) =>{ items.classList.remove('tabs-link-selected')});
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
  
    // this.element;
  }

  select() {
    // Select all ".tabs-item" elements from the DOM
    let items = document.querySelectorAll('.tabs-item');

    // Remove the class "tabs-item-selected" from each element

    items.forEach( item => {item.classList.remove('tabs-item-selected');
  })
    // Add a class named "tabs-item-selected" to this element
    //this.element;
    this.element.classList.add('tabs-item-selected');
  }
  
}


//  START HERE: 

// - Select all classes named ".tabs-link" and assign that value to the links variable

// - With your selection in place, now chain a .forEach() method onto the links variable to iterate over the DOM NodeList

// - In your .forEach() method's callback function, return a new instance of TabLink and pass in each link as a parameter

links = document.querySelectorAll('.tabs-link')
                .forEach(element => new TabLink(element));
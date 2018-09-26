// JS goes here


class Open {
    constructor(element) {
        this.element = element;

        this.buttonOpen = this.element.querySelector('.hamburger');
        // console.log(this.button);
        this.buttonClose = this.element.querySelector('.x');

       
        this.buttonOpen.addEventListener('click', () => {
            this.toggleMenu();
            // console.log('click works');
        });

        this.buttonClose.addEventListener('click', () => {
            this.toggleMenu();
            // console.log('click works');
        });
    }

    toggleMenu() {
        document.querySelector('.nav').classList.toggle('nav-close');
        // document.querySelector('.hamburger').classList.toggle('hamburger');
        document.querySelector('.x').classList.toggle('x-none');
        }
    }


let dropdowns = document.querySelectorAll('.menu-bar');


dropdowns = Array.from(dropdowns).map( dropdown => new Open(dropdown));



// ______________________________TABS

// class TabLink {
//     constructor(domElement) {
//       this.element = domElement;
      
//       // Get the custom data attribute on the Link
//       this.data = this.element.dataset.tab;
      
//       // Using the custom data attribute get the associated Item element
//       this.itemElement = document.querySelector(`.tabs-item[data-tab='${this.data}']`);
      
//       // Using the Item element, create a new instance of the TabItem class
//       this.tabItem = new TabItem(this.itemElement);
      
//       // Add a click event listener on this instance, calling the select method on click
//       this.element.addEventListener('click', (event) => { this.select(event); })
//     };
  
//     select() {
//       // Get all of the elements with the tabs-link class
//       const links = document.querySelectorAll('.tabs-link');
  
//       // Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
//       Array.from(links).forEach(link => {
//         link.classList.add("tabs-item");
//     });
  
//       // Add a class named "tabs-link-selected" to this link
//       this.element.classList.remove('tabs-item');
      
//       // Call the select method on the item associated with this link
  
//       this.tabItem.select();
//     console.log('Select works')
  
//     }
//   }
  
//   class TabItem {
//     constructor(element) {
//       this.element = element;
//     }
  
//     select() {
//       // Select all items elements from the DOM
//       let items = document.querySelectorAll(".tabs-item");
  
//       // Remove the class "tabs-item-selected" from each element
//       items.forEach((item) => { item.classList.add("tabs-item"); });
  
//       // Add a class named "tabs-item-selected" to this element 
//       this.element.classList.remove("tabs-item");
//     }
//   }
  
  
//   // START HERE: create a reference to the ".tabs" classes
//   let links = document.querySelectorAll('.tabs-link');
  
//   // Following the code in the Dropdown file, iterate through the array you created above creating a new instance of the TabLink class for each item. 
//   links = Array.from(links).map( link => new TabLink(link));
  
//   // DO THIS LAST: Once you have created an array of TabLink instances. call select() on the first item in the array
//   links[0].select();


class TabLink {
    constructor(domElement) {
      this.element = domElement;
      
      // Get the custom data attribute on the Link
      this.data = this.element.dataset.tab;
      
      // Using the custom data attribute get the associated Item element
      this.itemElement = document.querySelector(`.tabs-item[data-tab='${this.data}']`);
      
      // Using the Item element, create a new instance of the TabItem class
      this.tabItem = new TabItem(this.itemElement);
      
      // Add a click event listener on this instance, calling the select method on click
      this.element.addEventListener('click', (event) => { this.select(event); })
    };
  
    select() {
      // Get all of the elements with the tabs-link class
      const links = document.querySelectorAll('.tabs-link');
  
      // Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
      Array.from(links).forEach(link => {
        link.classList.remove("tabs-link-selected");
    });
  
      // Add a class named "tabs-link-selected" to this link
      this.element.classList.add('tabs-link-selected');
      
      // Call the select method on the item associated with this link
  
      this.tabItem.select();
    console.log('Select works')
  
    }
  }
  
  class TabItem {
    constructor(element) {
      this.element = element;
    }
  
    select() {
      // Select all items elements from the DOM
      let items = document.querySelectorAll(".tabs-item");
  
      // Remove the class "tabs-item-selected" from each element
      items.forEach((item) => { item.classList.remove("tabs-item-selected"); });
  
      // Add a class named "tabs-item-selected" to this element 
      this.element.classList.add("tabs-item-selected");
    }
  }
  
  
  // START HERE: create a reference to the ".tabs" classes
  let links = document.querySelectorAll('.tabs-link');
  
  // Following the code in the Dropdown file, iterate through the array you created above creating a new instance of the TabLink class for each item. 
  links = Array.from(links).map( link => new TabLink(link));
  
  // DO THIS LAST: Once you have created an array of TabLink instances. call select() on the first item in the array
  links[0].select();
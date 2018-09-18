// JS goes here
class TabLink {
   constructor(element) {
     this.element = element;
     // Get the custom data attribute on the Link
     this.data = this.element.dataset.tab;
     // Using the custom data attribute get the associated Item element
     this.itemElement = document.querySelector(`.tabs-item[data-tab="${this.data}"]`);
     // Using the Item element, create a new instance of the TabItem class
     this.tabItem = new TabItem(this.itemElement);
     // Add a click event listener on this instance, calling the select method on click
     this.element.addEventListener('click', () => { this.select() });
   };
 
   select() {
     // Get all of the elements with the tabs-link class
     const links = document.querySelectorAll('.tab');
     // Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
     Array.from(links).forEach(link => { link.classList.remove('tabs-link-selected') });
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
     const items = document.querySelectorAll('.tabs-item');
     // Remove the class "tabs-item-selected" from each element
     Array.from(items).forEach(item => { item.classList.remove('tabs-item-selected') });
     // Add a class named "tabs-item-selected" to this element 
     this.element.classList.add('tabs-item-selected');
   }
 }
 
 // START HERE: create a reference to the ".tabs" classes
 let tabs = document.querySelectorAll('.tab');
 console.log(tabs);
 // Following the code in the Dropdown file, iterate through the array you created above creating a new instance of the TabLink class for each item. 
 tabs = Array.from(tabs).map(tab => new TabLink(tab));
 // DO THIS LAST: Once you have created an array of TabLink instances. call select() on the first item in the array
 tabs[0].select();

 function openNav() {
  document.querySelector(".dropdown").style.height = "100%";
}

/* Close */
function closeNav() {
  document.querySelector(".dropdown").style.height = "0%";
}
 

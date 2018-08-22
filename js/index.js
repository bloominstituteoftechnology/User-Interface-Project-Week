const toggleMenu = () => {
    menu.classList.toggle('menu--open');
  };
   
   let toggle = false;
   
   const toggleimg = () => {
     if (toggle === false) {
       menuButton.src = 'img/nav-hamburger-close.png';
       toggle = true;
     } else if (toggle === true) {
       menuButton.src = 'img/nav-hamburger.png';
       toggle = false;
     }
   };
   
   const menu = document.querySelector('.menu');
   
   const menuButton = document.querySelector('.hamburger');
   
   menuButton.addEventListener('click', e => {
     toggleMenu();
     toggleimg();
   });

   class TabLink {
    constructor(element) {
      this.element = element;
      
      // Get the custom data attribute on the Link
      this.data = this.element.dataset.tab;
      
      // Using the custom data attribute get the associated Item element
      this.itemElement;
      this.itemElement = document.querySelector(`.tabs-item[data-tab="${this.data}"]`);
      
      // Using the Item element, create a new instance of the TabItem class
      this.tabItem = new TabItem(this.itemElement);
      
      // Add a click event listener on this instance, calling the select method on click
      this.element.addEventListener('click', () => {this.select();});
    };
  
    select() {
      // Get all of the elements with the tabs-link class
      const links = document.querySelectorAll('.tabs-link');
  
      // Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
      links.forEach((elem) => {
        elem.classList.remove('tabs-link-selected');
      });
  
      // Add a class named "tabs-link-selected" to this link
      this.element.classList.add('tabs-link-selected');
      
      // Call the select method on the item associated with this link
  
      this.tabItem.select();
  
    }
  }
  
  
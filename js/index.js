
const hamburger = document.querySelector("#ham-closed");
const closeNav = document.querySelector("#ham-open");
const mainNav = document.querySelector(".main-nav");
const navShow = document.querySelector("#show-nav");

    hamburger.addEventListener("click", () => {
        mainNav.classList.toggle("hide-nav");
        hamburger.classList.toggle("hide-this");
        closeNav.classList.toggle("hide-hamburger");
        navShow.classList.toggle("nav");
        
        
        console.log('hi');
    });

    closeNav.addEventListener("click", () => {
        mainNav.classList.toggle("hide-nav");
        hamburger.classList.toggle("hide-this");
        closeNav.classList.toggle("hide-hamburger");
        navShow.classList.toggle("nav");
        
    })

    // Services page-----------------------------

    class TabLink {
        constructor(link) {
          this.link = link;
          
          // Get the custom data attribute on teh Link
          this.data = this.link.dataset.tab;
          // Using the custom data attribute ge tthe associated Item element
          this.itemElement = document.querySelector(`.tabs-item[data-tab="${this.data}"]`);
          // Using the Item element, create a new instance of the TabItem class
          this.tabItem = new TabItem(this.itemElement);
          
          this.link.addEventListener('click', () => {this.select();});
        };
      
        select() {
          // Get all of the elements with the tabs-link class
          const links = document.querySelectorAll('.tabs-link');
      
          // Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
          Array.from(links).forEach(function(link) {
            link.classList.remove('tabs-link-selected')
          });
      
          // Add a class named "tabs-link-selected" to this link
          this.link.classList.add('tabs-link-selected');
          
          // Call the select method on the item associated with this link
          this.tabItem.select();
        }
      }
      
      class TabItem {
        constructor(element) {
          this.itemElement = element;
        }
      
        select() {
          // Select all items elements from the DOM
          const items = document.querySelectorAll('.tabs-item');
          // Remove the class "tabs-item-selected" from each element
          Array.from(items).forEach(function(item){
            item.classList.remove('tabs-item-selected');
          })
          // Add a class named "tabs-item-selected" to this element 
          this.itemElement.classList.add('tabs-item-selected');
          console.log("Hello");
        }
        
      }
      
      // START HERE: create a reference to the ".tabs-link" class
      let links = document.querySelectorAll('.tabs-link');
      // Following the code in the Dropdown file, iterate through the array you created above creating a new instance of the TabLink class for each item. 
      links = Array.from(links).map( link => new TabLink(link));
      links[0].select()

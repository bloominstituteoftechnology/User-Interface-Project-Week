// JS goes here
class TabLink{
    constructor(element){
        this.element= element;
        this.data = this.element.dataset.tab;
        this.item = document.querySelector(`.tabs-item[data-tab="${this.data}"]`);
        //console.log(this.item);
        this.tabItem = new TabItem(this.item);
        
        this.element.addEventListener('click', () => {
            // Call the select method you define below
            this.select();
            //console.log('click fired');
          });
    };

    select() {
        // Get all of the elements with the tabs-link class
        const links = document.querySelectorAll('.tab-link');
        //console.log(links);
    
        // Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
        links.forEach( link => {
          link.classList.remove('tabs-link-selected')
        });
    
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
      // Select all ".tabs-item" elements from the DOM
      const items = document.querySelectorAll('.tabs-item');
      // Remove the class "tabs-item-selected" from each element
      
      items.forEach( item => {
        item.classList.remove('tabs-item-selected');
      })
      // Add a class named "tabs-item-selected" to this element 
      this.element.classList.add('tabs-item-selected');
    }
  }
let links = document.querySelectorAll('.tab-link').forEach( link => new TabLink(link));


let hamclick = document.querySelector('.hamburger-img');
let close = document.querySelector(".close-image");

hamclick.addEventListener('click', () =>{
    document.getElementById("myDropdown").classList.toggle("show");
   
});
close.addEventListener('click', ()=>{
    document.getElementById("myDropdown").classList.toggle("show");
});



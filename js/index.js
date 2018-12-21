// JS goes here

//Hamburger Button
function myFunction(x) {
  x.classList.toggle("change");
} 
//Hamburger End

//Service page
class TabLink {
    constructor(element) {
       this.element = element;
       this.data = this.element.dataset.tab;
       this.item = document.querySelector(`.tabs-item[data-tab="${this.data}"]`);
       this.tabItem = new TabItem(this.item);
       this.element.addEventListener("click", () => {
       this.select()
        })
    };
  
    select() {
       const links = document.querySelectorAll(".tabs-link");
      links.forEach( link => {
        link.classList.remove('tabs-link-selected')
      });
      this.element.classList.add('tabs-link-selected');
      this.tabItem.select();
    }
  }
  
  class TabItem {
    constructor(element) {
       this.element = element;
    }
  
    select() {
       const items = document.querySelectorAll('.tabs-item'); 
      items.forEach( item => {
        item.classList.remove('tabs-item-selected');
      })
      this.element.classList.add('tabs-item-selected')
  }
  }
  
  const  links = document.querySelectorAll(".tabs-link");
  links.forEach(link => new TabLink(link));

  //Dropdown

  class Dropdown {
    constructor(element) {
      this.element = element;
      this.button = this.element.querySelector(".dropdown-button");
      this.content = this.element.querySelector(".dropdown-content");
      this.button.addEventListener('click', () => {
        this.toggleContent()});
      }
  
     toggleContent() {
      this.content.classList.toggle("dropdown-hidden")
     }
  }
  
  
  let dropdowns = document.querySelectorAll('.dropdown').forEach( dropdown => new Dropdown(dropdown));


  //Hamburger Menu
  
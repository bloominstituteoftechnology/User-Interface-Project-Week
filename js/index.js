// JS goes here
let hamburger = document.querySelector( ".hamburger" );
let navMenu = document.querySelector( ".navigation" );
let navMenuClose = document.querySelector( ".close-button" );
console.log( hamburger );
hamburger.addEventListener( "click", function( event )
{
    navMenu.style.display = "flex"; 
    this.style.display = "none";
    navMenuClose.style.display = "block";

})
navMenuClose.addEventListener( "click", function( event )
{
    navMenu.style.display = "none";
    navMenuClose.style.display = "none";
    hamburger.style.display = "block";
})

// Services js
class TabLink {
    constructor(element) {
      this.element = element;
      this.data = this.element.dataset.tab;
      this.item = document.querySelector(`.tabs-item[data-tab="${this.data}"]`);
      this.tabItem = new TabItem(this.item);
      this.element.addEventListener('click', () => {
        this.select();
      });
    };
  
    select() {
      
      const links = document.querySelectorAll('.tabs-link');
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
      this.element.classList.add('tabs-item-selected');
    }
  }
  
  
  let links = document.querySelectorAll('.tabs-link');
  links = Array.from(links).map( link => new TabLink(link));
  
  links[0].select()
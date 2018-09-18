// JS goes here
/*class Dropdown {
    constructor(element) {
      
      this.element = element;
      
      this.button = this.element.querySelector(".menu-button");
      
      this.content = this.element.querySelector(".menu-content");

      this.close = this.element.querySelector(".icon-close")
      
      this.element.addEventListener('click', () => {
        this.toggleContent()
        console.log(clickd)
      })
    }
 
    toggleContent() {
      this.content.classList.toggle('menu-hidden');
    }
  }
 */

  class Dropdown {
    constructor(element){
      this.element = element;
      this.open = document.querySelector(".menu-button");
      this.content = document.querySelector(".menu-content");
      this.close = document.querySelector(".close-button");

      this.open.addEventListener("click", () => {this.toggleContent()
      this.open.classList.add('hide');
      this.close.classList.remove('hide');})
      

      this.close.addEventListener("click", () =>{this.toggleContent()
      this.close.classList.add('hide');
      this.open.classList.remove('hide');})
    }

    toggleContent() {
      this.content.classList.toggle('menu-hidden');
    }
  }

  let dropdowns = new Dropdown();
  



  class TabLink {
    constructor(element) {
      this.element = element;
      this.data = this.element.dataset.tab
      this.itemElement = document.querySelector(`.tabs-item[data-tab="${this.data}"]`);
      this.tabItem = new TabItem(this.itemElement);
      this.element.addEventListener('click', () => {
        this.select()
      })
  
    };
  
  
    select() {
      const links = document.querySelectorAll('.tabs-link'); 
      let notSeen = document.querySelectorAll('.tabs-item');
      notSeen.forEach((item)=>{
        item.style = 'display: none';
      })  
      this.tabItem.select();
    }
  }
  
  class TabItem {
    constructor(element) {
      this.element = element;

    }
  
    select() {
        let allItems = document.querySelectorAll('.tabs-item');
        Array.from(allItems).forEach((item)=>{
            item.style = 'display: none';
        });

        this.element.style = 'display: flex'
    }
  }

  let links = document.querySelectorAll(".tabs-link");
  links = Array.from(links).map(links => new TabLink(links));
  links[0].select();
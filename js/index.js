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
            this.toggleMenu(event);
            // console.log('click works');
        });
    }

    toggleMenu() {
        document.querySelector('.nav').classList.toggle('nav-close');
        document.querySelector('.hamburger-off').classList.toggle('hamburger');
        document.querySelector('.x').classList.toggle('x-none');
        }
    }


let dropdowns = document.querySelectorAll('.menu-bar');


dropdowns = Array.from(dropdowns).map( dropdown => new Open(dropdown));



// ______________________________TAB

class TabLink {
    constructor(domElement) {
      this.element = domElement;
      
      this.data = this.element.dataset.tab;
      
      this.itemElement = document.querySelector(`.tabs-item[data-tab='${this.data}']`);
      
      this.tabItem = new TabItem(this.itemElement);
      
      this.element.addEventListener('click', (event) => { this.select(event); })
    };
  
    select() {
      const links = document.querySelectorAll('.tabs-link');
  
      Array.from(links).forEach(link => {
        link.classList.remove("tabs-link-selected");
    });
  
      this.element.classList.add('tabs-link-selected');
    
  
      this.tabItem.select();
    console.log('Select works')
  
    }
  }
  
  class TabItem {
    constructor(element) {
      this.element = element;
    }
  
    select() {
      let items = document.querySelectorAll(".tabs-item");
  
      items.forEach((item) => { item.classList.remove("tabs-item-selected"); });
   
      this.element.classList.add("tabs-item-selected");
    }
  }
  

  let links = document.querySelectorAll('.tabs-link');
  
  
  links = Array.from(links).map( link => new TabLink(link));
  
 
  links[0].select();
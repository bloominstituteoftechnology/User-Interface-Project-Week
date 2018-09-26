// JS goes here
class Dropdown {
    constructor(element) {
      

      this.element=element;
      

      this.button = document.querySelector('.hamButton');
      
      
      this.content=this.element.querySelector('.dropdown-content');
      
      
      this.button.addEventListener('click', (event) => {
          this.toggleContent(event)
  
      })
      this.closeButton = document.querySelector('.close-button');
       
      this.closeButton.addEventListener('click', (event) => {
          this.toggleContent(event)
  
      })
    }
  
    toggleContent() {
      
      
      this.content.classList.toggle('dropdown-hidden');
    }
  }
  let dropdowns = document.querySelectorAll('.dropdown');
  dropdowns = Array.from(dropdowns).map( dropdown => new Dropdown(dropdown));
  
  class TabLink {
    constructor(element) {
      this.element=element;
      
      this.data=this.element.dataset;
      console.log(this.data);
      
      this.itemElement=document.querySelector(`.tab-content[data-tab='${this.data}']`);
      console.log(this.itemElement);
      this.tabItem= new TabItem(this.itemElement);
      
      this.element.addEventListener('click',()=>{
        alert(`${this.data} clicked;`)
        this.select();
      })
    };
  
    select() {
      const links=document.querySelectorAll('.tab-link');
  
      Array.from(links).forEach((item)=>
        item.classList.remove('tab-link-selected')
      );
  
      this.element.classList.add('tab-link-selected');
      
      // this.tabItem.select();
    }
  }
  
  class TabItem {
    constructor(element) {
      this.element=element;
    }
  
    select() {
      const content=document.querySelectorAll('.tab-content');
      Array.from(content).forEach((item)=>
        item.classList.remove('tab-content-selected')
      );
      this.element.classList.add('tab-content-selected');  
    }
  }
  
  

  let links = document.querySelectorAll('.tab-link');
  
 
  links = Array.from(links).map(link => new TabLink(link));
  
 
  // links[0].select();
  


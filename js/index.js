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
  

// JS goes here

class Dropdowner {
    constructor (element) {
        console.log("this?")
        this.element = element;

        this.button = this.element.querySelector('.img-hamburger');

        this.content = this.element.querySelector('.ninja-nav');

        this.button.addEventListener('click', () => {
            this.toggleContent();
        })
    }
    toggleContent(){
        console.log("does this work");
        this.content.classList.toggle('ninja-hidden');
        // this.button.classList.toggle('img-hamburger');
        this.button.classList.toggle('img-x');
    }


}




let dropdown = document.querySelectorAll(".tilted");
console.log(dropdown);
dropdown = Array.from(dropdown).map( dropdowner => new Dropdowner(dropdowner));



















class Tabber {
    constructor(element) {
        this.element = element;

        this.tabData = this.element.dataset.tab;

        this.itemElement = document.querySelectorAll(`.article[data-tab='${this.tabData}']`);

        this.article = this.itemElement;

        this.article = Array.from(this.article).map(element => new TabArticle(element));
        
        this.element.addEventListener('click', () => {
            this.selectTab();
          });
        };
      
        selectTab(){
      
          // Select all elements with the .tab class on them
          const tabs = document.querySelectorAll('.tab');
          // Iterate through the NodeList removing the .active-tab class from each element
          Array.from(tabs).forEach(function(item){
            item.classList.remove("active-tab");
          })
          // Add a class of ".active-tab" to this.element
          
          this.element.classList.add('active-tab');
          
      
          // Select all of the elements with the .card class on them
          const article = document.querySelectorAll('.article');
          // Iterate through the NodeList setting the display style each one to 'none'
          Array.from(article).forEach(function(item){
            item.style.display = "none";
          })
          // Notice we are looping through the this.cards array and invoking selectCard() from the TabCard class, nothing to update here
          this.article.forEach(articles => articles.selectArticle());
          
      
          
        }
      }
   
    
















class TabArticle {
    constructor(element){
      // Assign this.element to the passed in element.
      this.element = element;
  
    }
    selectArticle(){
      // Update the style of this.element to display = null
      this.element.style.display = "flex"
      
      
      
      
    }
  
    
  
  }
  


let tabs = document.querySelectorAll('.tab');
tabs = Array.from(tabs).map(element => new Tabber(element));
tabs[0].selectTab();
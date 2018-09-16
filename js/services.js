
class TabLink{
    constructor(element){
      
      this.element = element; 
     
      this.tabData = this.element.dataset.tab; 
     
      this.cards = document.querySelectorAll(`.tab[data-tab="${this.tabData}"]`); 
      
      this.cards = Array.from(this.cards).map(card => new TabCard(card) ); 
    
      this.element.addEventListener("click", () => {this.selectTab() });

      }

      selectTab(){

        const tabs = document.querySelectorAll(".button2");
    
        tabs.forEach(tab => { tab.classList.remove('active') });
  
        this.element.classList.add("active");
    
        const cards = document.querySelectorAll(".tab");
        
        cards.forEach(card => { card.style.display = 'none'; });
        
        this.cards.forEach(card => card.selectCard());

      }
    }

    class TabCard {
      constructor(element){
        
        this.element = element;
      }
      
      selectCard(){
        
        this.element.style.display = null;
      }
    }
  
let buttons = document.querySelectorAll(".button2"); 

buttons = Array.from(buttons).map(button => new TabLink(button)); 

buttons[0].selectTab(); 
 
class TabLink {
    constructor(tabElement){
      // assign this.tabElement to the tabElement DOM reference
      this.tabElement = tabElement;
      
      // Get the `data-tab` value from this.tabElement and store it here
      this.tabData = this.tabElement.dataset.tab; 
      
  
       // Map over the newly converted NodeList we just created in our if statement above. Convert each this.cards element into a new instance of the TabCard class. Pass in a card object to the TabCard class. 
      this.cards = Array.from(this.cards).map(card => new TabCard(card));
  
      // Add a click event that invokes this.selectTab
      this.tabElement.addEventListener('click', () => {this.selectTab()
      })
    };
  
    selectTab(){
  
      
      const tabs = document.querySelectorAll('.tab');
      
      
      tabs.forEach(tab => tab.classList.remove('active-tab'))
  
      
      const cards = document.querySelectorAll('.card') ;
  
      
      cards.forEach(card => card.style.display = 'none')
      
      
      this.tabElement.classList.add('active-tab');
    
      
      this.cards.forEach(card => card.selectCard());
    }
  }
  
  class TabCard {
    constructor(cardElement){
      this.cardElement = cardElement;
    }
    selectCard(){

      this.cardElement.style.display = 'flex';
    }
  
  }
  

  let tabs = document.querySelectorAll('.tab').forEach(tab => {new TabLink(tab)});

  
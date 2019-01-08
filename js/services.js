class TabLink {
    constructor(tabElement){
      // assign this.tabElement to the tabElement DOM reference
      this.tabElement = tabElement;
      
      // Get the `data-tab` value from this.tabElement and store it here
      this.tabData = this.tabElement.dataset.tab; 


      this.item = document.querySelector(`.card[data-tab="${this.tabData}"]`);
  
      // Map over the newly converted NodeList we just created in our if statement above. Convert each this.cards element into a new instance of the TabCard class. Pass in a card object to the TabCard class. 
      this.cards = Array.from(this.cards).map(card => new TabCard(card));
      // Add a click event that invokes this.selectTab
      this.tabElement.addEventListener('click', () => {this.selectTab()
      })
    };
    selectTab(){
      // Select all elements with the .tab class on them
      const tabs = document.querySelectorAll(".tab");
      
      // Iterate through the NodeList removing the .active-tab class from each node
      tabs.forEach( tab => {
        tab.classList.remove("active-tab");
      })
  
      // Select all of the elements with the .card class on them
      const cards = document.querySelectorAll('.card');
      
      // Iterate through the NodeList setting the display style each one to 'none'
      cards.forEach( card => card.style.display = 'none');
  
      // Add a class of ".active-tab" to this.tabElement
      this.tabElement.classList.add("active-tab");
      
      // Notice we are looping through the this.cards array and invoking selectCard() from the TabCard class. Nothing to update here, the code is written for you to study.
      this.cards.forEach(card => card.selectCard());
    }
  }
  class TabCard {
    constructor(cardElement){
      this.cardElement = cardElement;
    }
    selectCard(){
    //   const items = document.querySelectorAll('.card');
    //   items.forEach( item => { item.classList.remove('active-tab');
    // })
    // this.cardElement.classList.add('active-tab')
      this.cardElement.style.display = "flex";
    }
  
  }
  

  let tabs = document.querySelectorAll('.tab').forEach(tab => {new TabLink(tab)});

  
class TabLink {
    constructor(tab){
        this.element = tab;
        
        this.tabData = this.element.dataset.tab; 

        this.cards = document.querySelectorAll(`.services-bottom-content-section[data-tab="${this.tabData}"]`);
  
        this.cards = Array.from(this.cards).map( cards => new TabCard(cards));

        this.element.addEventListener('click', (e) => {
        //console.log(`Got click on ` + this.element);
        this.selectTab();
      });
    }
  
    selectTab(){
        //console.log(`Selecting tab`);
        
        const tabs = document.querySelectorAll('.services-tab');
        
        tabs.forEach(function(tab) {
            tab.classList.remove('active-tab');
        });
        
        this.element.classList.add('active-tab');

        const cards = document.querySelectorAll('.services-bottom-content-section');
        //console.log(cards);

        cards.forEach(function(card) {
          //console.log(card);
            card.classList.add('not-active');
            card.classList.remove('active');
        });

        this.cards.forEach(card => card.selectCard());
    }
  }
  
  class TabCard {
    constructor(card){
      this.element = card;
    }

    selectCard(){
      this.element.classList.add('active');
      this.element.classList.remove('not-active');
    }
  }
  
  let tabs = document.querySelectorAll('.services-tab');
  tabs = Array.from(tabs).map( tabs => new TabLink(tabs));
  
  tabs[0].selectTab();
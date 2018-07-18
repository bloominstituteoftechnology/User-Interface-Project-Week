class Tabs {
    constructor(element){
      this.element = element;
      this.tabs = this.element.querySelectorAll('.tab');
      this.tabs = Array.from(this.tabs).map( tab => new TabLink(tab, this)); 
      this.activeTab = this.tabs[0];
      this.init();
    }
  
    init(){
      this.activeTab.selectTab();
    }
  
    updateActive(tabElement){
      this.activeTab.deselectTab();
      this.activeTab = tabElement;
    }
  
    getCards(data){
      
    return document.querySelectorAll(`.card[data-tab='${data}']`);
      
    }
  }
  
  
  
  
  
  
  class TabLink {
    constructor(element, parent){
      this.element = element;
      this.parent = parent;
      this.cards = this.parent.getCards(this.element.dataset.tab);
      this.cards = Array.from(this.cards).map(card => new TabCard(card));
      this.element.addEventListener('click', () => {this.selectTab()});
    }
  
    selectTab(){
      this.parent.updateActive(this);
      this.element.classList.add('active-tab');
      this.cards.forEach(card => card.selectCard());
    }
  
    deselectTab(){
      this.element.classList.remove('active-tab');
      this.cards.forEach( card => card.deselectCard());
    }
  }
  
  
  
  
  
  
  class TabCard {
    constructor(element){
      this.element = element;
    }
    selectCard(){
      this.element.style.display = null;
    }
    deselectCard(){
      this.element.style.display = 'none';
    }
  }
  
  
  
  
  
  let tabsArray = document.querySelectorAll('.service-tabs');
  tabsArray = Array.from(tabsArray).map( item => new Tabs( item ));
  
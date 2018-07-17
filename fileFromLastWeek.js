class Tabs {
  constructor(element){
    this.element = element; //.tabs
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
}

class TabLink {
  constructor(element, parent){
    this.element = element;
    this.parent = parent;
    this.cards = this.getCards(this.element.dataset.tab);/
    this.cards = Array.from(this.cards).map(card => {
      return new TabCard (card)
    });
    this.element.addEventListener('click', this.selectTab());
  }
  getCards(data){
    if ('all' === data) {
      return document.querySelectorAll('.card');
    } else {
        return document.querySelectorAll(`.card.dataset.tab="${data}"`);
    }
  }
  selectTab(){
    this.parent.updateActive(this);
    this.element = document.querySelector('.active-tab');
    this.cards.forEach(card => card.selectCard());
  }
  deselectTab(){
    this.tabs.remove('.active-tab');
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
    this.element.style.display = "none";
  }
}

let tabs = document.querySelectorAll('.tabs');
tabs = Array.from(tabs).map( tab => new Tabs (tab));

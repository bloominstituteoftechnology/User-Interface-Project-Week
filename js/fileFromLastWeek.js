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


////________________from last week _________________________//
// // class tabs ===> allTabs
// // class topics ===> topics
// // class tab ===> tab
// // class cards-container ===> cards-container
// // class card ===> component-content //data tab in this divide
//
// // //my stuff from 07-17
// class Tabs {
//   constructor(element){
//     this.element = element;
//     this.tabs = this.element.querySelectorAll('.tab');
//     this.tabs = Array.from(this.tabs).map( x => new TabLink(x, this));
//     // this.name = element.innerHTML;
//     // console.log(`${this.name} this name`);
//     // this.data = this.element.dataset.tab;
//     // console.log(`${this.data} this data`);
//     // this.onClick(this.element);
//     this.activeTab = this.tabs[0];
//     this.init();
//   }
//   init(){
//     this.activeTab.selectTab();
//   }
//   updateActive(tabElement){
//     this.activeTab.deselectTab();
//     this.activeTab = tabElement;
//   }
//   // onClick(x){
//   //   x.addEventListener("click", function(element){
//   //     // console.log(element)
//   //   x.style.color = "blue";
//   //   });
//   // }
// }
//
// class TabLink {
//   constructor(element, parent){
//     this.element = element;
//     this.parent = parent;
//     this.cards = this.getCards(this.element.dataset.tab);
//     this.cards = Array.from(this.cards).map(card => {
//       return new TabCard (card)
//     });
//     this.element.addEventListener('click', this.selectTab());
//   }
//   getCards(data){
//     if ('all' === data) {
//       return document.querySelectorAll('.component-content');
//     } else {
//         return document.querySelectorAll(`.component-content.dataset.tab="${data}"`);
//     }
//   }
//   selectTab(){
//     this.parent.updateActive(this);
//     this.element = document.querySelector('.active-tab');
//     this.cards.forEach(card => card.selectCard());
//   }
//   deselectTab(){
//     this.tabs.remove('.active-tab');
//     this.cards.forEach( card => card.deselectCard());
//   }
// }
//
// class TabCard {
//   constructor(element){
//       this.element = element;
//   }
//   selectCard(){
//     this.element.style.display = null;
//   }
//   deselectCard(){
//     this.element.style.display = "none";
//   }
// }




// //services.js
// class TabCard {
//   constructor(element){
//     this.element = element;
//     this.data = this.element.dataset.tab;
//     console.log(`${this.element} hithere`)
//     this.onClick(this.element);
//   }
//   onClick(x){
//    x.addEventListener("click", function(element){
//      // console.log(this.name)
//     displayContent(this.element);
//     x.style.color = "blue";
//     // console.log(x.dataset)
//     // let datatype = x.dataset;
//     // if (x.dataset.tab === 'construction'){
//     //   console.log('yay construction')
//     // }
//    });
//   }
// }
//
// class TabContent {
//   constructor(element){
//     this.element = element;
//     this.data = this.element.dataset.tab;
//     console.log(`${this.data} + inside function`);
//   }
// }

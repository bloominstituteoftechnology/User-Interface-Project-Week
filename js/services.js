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




//services.js
class TabCard {
  constructor(element){
    this.element = element;
    this.name = element.innerHTML;
    console.log(this.name);
    this.data = this.element.dataset.tab;
    console.log(this.data);
    this.onClick(this.element);
  }
  onClick(x){
   x.addEventListener("click", function(element){
     console.log(this.name)
    x.style.color = "blue";
    console.log(x.dataset)

   });
  }
}

 //services.js
let componentTabs = document.querySelectorAll(".tab");
 // console.log(componentTabs);

componentTabs = Array.from(componentTabs);
// console.log(`${componentTabs[0]} 1`);

componentTabs = componentTabs.map( x => new TabCard (x))

 // console.log(`${componentTabs[0]} 2`);

// componentTabs.forEach((element)=>{
//   addEventListener('click', function(element){
//     console.log(`${componentTabs} 3`);
// })
// });

// JS goes here
const hamburgerButton = document.querySelector('.hamburger');
const navigation = document.querySelector('#dropTop');
// console.log(navigation.classList);
// hamburgerButton.addEventListener('mouseover', () => {
//     navigation.classList.add('show');
//     console.log(navigation.classList);   
// })


let count = 0;
hamburgerButton.addEventListener('click', () => {
    if (count%2 === 0) {
        navigation.classList.add('show');
        navigation.classList.remove('hide');
        hamburgerButton.src = "img/nav-hamburger-close.png";  
        return count++;
    } else {
        navigation.classList.remove('show');
        navigation.classList.add('hide');        
        hamburgerButton.src = "img/nav-hamburger.png";  
        return count++;
    }
});


//TABS FUNCTIONALITY

// class TabSet {
//     constructor(tabs){
//         this.tabs = tabs;
//         this.tabData = this.tabs.dataset.tab;
//         this.tabContent = document.querySelector(`.cards-content[data-tab='${this.tabData}']`);
//         console.log(this.tabContent);
//         // console.log(this.tabData);
//         this.tabs.addEventListener('click', (event) => {this.tabClick(event) });
//         this.tabs.addEventListener('click', (event) => {this.colorChange(event)});
//         this.tabContent = new Content(this.tabContent);

//     }
//     tabClick() {
//         this.tabContent.toggleContent();
//     } 
//     colorChange() {
//         this.tabs.classList.toggle('color');        
//     }   
// }

// class Content {
//     constructor(tabContent) {
//       this.tabContent = tabContent;
//       console.log(this.tabContent);
//     }
//     toggleContent() {
//       this.tabContent.classList.toggle('change');
//     }
//   }
  
//   let tabs = document.querySelectorAll('.tabs');
//   console.log(tabs);
//   tabs = Array.from(tabs).map( tab => new TabSet(tab));
//   console.log(tabs);
  
  
  
  class TabLink {
  constructor(element) {
    this.element = element;
    this.data = this.element.dataset.tab;
    this.itemElement = document.querySelector(`.tabs-item[data-tab='${this.data}']`);
    this.tabItem = new TabItem(this.itemElement);
    this.element.addEventListener('click', () => {
      this.select();
    })
  }
  select() {
    const links = document.querySelectorAll('.tabs-link');
    Array.from(links).forEach(link => link.classList.remove('tabs-link-selected'));
    this.element.classList.add('tabs-link-selected');
    this.tabItem.select();
  }
}
 class TabItem {
  constructor(element) {
    this.element = element;
  }
  select() {
    const items = document.querySelectorAll('.tabs-item');
    items.forEach(item => item.classList.remove('tabs-item-selected'));
    items.forEach(item => item.classList.add('tabs-item-deselected'));
    this.element.classList.add('tabs-item-selected');
    this.element.classList.remove('tabs-item-deselected');
  }
}
 let links = document.querySelectorAll('.tabs-link');
links = Array.from(links).map(link => new TabLink(link));
// links[0].select();

// Homepage javascript changes


const villasButton = document.querySelector('.villas-text');
const outskirtsButton = document.querySelector('.outskirts-text');
const theBlocksButton = document.querySelector('.the-blocks-text');

const villasText = document.querySelector('.villas p');
const outskirtsText = document.querySelector('.outskirts p');
const theBlocksText = document.querySelector('.the-blocks p');

const container = document.querySelector('.container');





villasButton.addEventListener('mouseover', () => {
    villasText.style.display ='block';
});
outskirtsButton.addEventListener('mouseover', () => {
    outskirtsText.style.display ='block';
});
theBlocksButton.addEventListener('mouseover', () => {
    theBlocksText.style.display ='block';
});

container.addEventListener('click', () => {
    villasText.style.display ='none';
    outskirtsText.style.display ='none';
    theBlocksText.style.display ='none';
});


const submitButton = document.querySelector('.submit');

console.log (submitButton);
// JS goes here
const toggleMenu = () => { 
    menu.classList.toggle('menu--open')
  }

    const menu = document.querySelector('.menu-content');

    const menuButton = document.querySelector('.hamburger-img');

menuButton.addEventListener('click',event => {
    toggleMenu();
  });
// this is the Home nav JS ^^^

class TabLink {
  constructor(element){
    this.element = element;
    this.tabData = this.element.dataset.tab; 

    // if(this.tabData === 'all'){
    //   this.cards = document.querySelectorAll('.card');
    // } else {
    //   this.cards = document.querySelectorAll(`.card[data-tab = "${this.tabData}"]`);
    // }
   
    this.cards = document.querySelectorAll(`.middle-four-nav[data-tab = "${this.tabData}"]`);
    
    this.cards = Array.from(this.cards).map(card => new TabCard(card));

    this.element.addEventListener('click', ()=> {this.selectTab()
  });
  }

  selectTab(){
    const tabs = document.querySelectorAll('.button2');

    tabs.forEach(function(item){
      item.classList.remove('active-tab')
    });

    this.element.classList.add('active-tab');

    const cards = document.querySelectorAll('.middle-four-nav');

    cards.forEach(function(item){
      item.style.display = 'none';
    });

    this.cards.forEach(card => card.selectCard());
  }
}

class TabCard {
  constructor(element){
    this.thisElement = element;
  }
  selectCard(){
    this.thisElement.style.display = null;
  }

}

let tabs = document.querySelectorAll('.button2');
tabs = Array.from(tabs).map(tab => new TabLink(tab));
tabs[0].selectTab();
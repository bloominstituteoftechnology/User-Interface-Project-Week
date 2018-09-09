class TabLink {
    constructor(element){
      this.element = element;
  
      this.tabData = element.dataset.tab; 
      
      if(this.tabData === 'all'){
        this.cards = document.querySelectorAll(`.card`)
       } else {
        this.cards = document.querySelectorAll(`.card[data-tab="${this.tabData}"]`);
      } 
    
      this.cards = Array.from(this.cards).map(card => new TabCard(card));
      
      this.element.addEventListener('click', () => {
        this.selectTab();
      });
    }
  
    selectTab(){
      const tabs = document.querySelectorAll('.tab');
      
      tabs.forEach(tab => {
        tab.classList.remove('active-tab')
      }); 
      
      this.element.classList.add('active-tab');
    
      const cards = document.querySelectorAll('.card');
      
      cards.forEach(cards => {
        cards.style.display = 'none';
      });
      
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

  let tabs = document.querySelectorAll('.tab');
  
  tabs = Array.from(tabs).map(element => new TabLink(element));
  
  tabs[0].selectTab()


//funtionality for nav open/close
const open = () => {
  menu.classList.add('menu--open'); 
}
const menuClose = ( ) => {
  menu.classList.remove('menu--open');
}


const close = document.querySelector('.close');  
const menu = document.querySelector('.menu');
const menuButton = document.querySelector('.menu-button');

menuButton.addEventListener('click', open);
close.addEventListener('click', menuClose);
//open/close end

const show = () => {
btn1.classList.add('none');
btn2.classList.remove('none');
}
const hide = () => {
btn2.classList.add('none');
btn1.classList.remove('none');
}

const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');

btn1.addEventListener('click', show);
btn2.addEventListener('click', hide);
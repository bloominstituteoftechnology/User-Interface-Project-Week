//Menu Toggle
const toggleMenu = () => {
    console.log('menu',menu);
    menu.classList.add('open-menu');
    xButton.classList.add('show-x-button');
    menuButton.classList.add('hide-menu-button');
  }

  const toggleX = () => {
    menu.classList.remove('open-menu');
    xButton.classList.remove('show-x-button');
    menuButton.classList.remove('hide-menu-button');
  }

  const xButton = document.querySelector('.x-button');

  const menu = document.querySelector('.menu');

  const menuButton = document.querySelector('.menu-button');

  menuButton.addEventListener('click', () => {
    toggleMenu();
  });

  xButton.addEventListener('click', () => {
    toggleX();
  })


//Tab-Navigation



class TabLink {
  constructor(element){
    this.element = element;
    this.tabData = this.element.dataset.tab;
    this.cards = document.querySelectorAll(`.card[data-tab='${this.tabData}']`);
    this.cards = Array.from(this.cards).map( card => new TabCard(card));
    this.element.addEventListener('click', () => {this.selectTab() });
  }

  selectTab(){
    let tabs = document.querySelectorAll('.tab');
    tabs.forEach( tab => {tab.classList.remove('active-tab');
  });
    let cards = document.querySelectorAll('.card');
    cards.forEach( card => card.style.display = 'none');
    this.element.classList.add('active-tab');
    this.cards.forEach(card => card.selectCard());


    // let tabs = document.querySelectorAll('.tab');
    // if ( tabs.classList.contains('.active-tab')) {
    // tabs.forEach( tab => {tab.classList.remove('active-tab');
    //  });
    // } else {
    // tabs.forEach( tab => {tab.classList.remove('active-tab');
    // });
    // let cards = document.querySelectorAll('.card');
    // cards.forEach( card => card.style.display = 'none');
    // this.element.classList.add('active-tab');
    // this.cards.forEach(card => card.selectCard());
      // }
    }
  }


class TabCard {
  constructor(element){
    this.element = element;
  }
  selectCard(){
    this.element.style = 'display: block;';
  }

}

let tabs = document.querySelectorAll('.tab');
tabs = Array.from(tabs).map( tab => new TabLink(tab));


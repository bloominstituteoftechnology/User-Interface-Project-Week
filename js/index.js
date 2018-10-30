// JS goes here

// ***************************************
// *********NAVIGATION BACKDROP***********
// ***************************************

const hamburger = document.querySelector('img.header__nav-links__hamburger');
const navBackdrop = document.querySelector(".nav-backdrop");
const navContainer = document.querySelector('.nav-link-container');

hamburger.addEventListener('click', () => {
  if(!navBackdrop.classList.contains('active') && !navContainer.classList.contains('open')) {
    navBackdrop.classList.add('active');
    navContainer.classList.add("open");
    hamburger.src="img/nav-hamburger-close.png";
  } else if (navBackdrop.classList.contains('active') && navContainer.classList.contains('open')) {
    navBackdrop.classList.remove('active');
    navContainer.classList.remove("open");
    hamburger.src="img/nav-hamburger.png";
  }
})

// ***************************************
// ******* SERVICES TAB COMPONENT ********
// ***************************************

class TabToggle {
  constructor(element) {
    this.element = element;
    this.data = this.element.dataset.tab;
    this.itemElement = document.querySelector(`.services__tabs-card[data-tab='${this.data}']`);
    this.tabCard = new TabCard(this.itemElement);
    this.element.addEventListener('click', () => this.select())
  }
  select(){
    const toggleTabs = document.querySelectorAll('.services__tabs-tab');
    toggleTabs.forEach( tab => tab.classList.remove('active-tab'));
    this.element.classList.add('active-tab');
    this.tabCard.select();
  }
}

class TabCard {
  constructor(element) {
    this.element = element;
  }
  select() {
    let tabCards = document.querySelectorAll('.services__tabs-card');
    tabCards.forEach(card => card.classList.remove('active-card'));
    this.element.classList.add('active-card');
  }
}

let tabs = document.querySelectorAll('.services__tabs-tab');
tabs = Array.from(tabs).map(tab => new TabToggle(tab));

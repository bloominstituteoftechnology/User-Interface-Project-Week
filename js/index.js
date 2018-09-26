// JS goes here

//index navigation js
// const toggleMenu = () => {
//   dropdown.classList.toggle('dropdown-open');
// }

// const dropdown = document.querySelector('.dropdown-content');

// const button = document.querySelector('.dropdown-button');

// button.addEventListener('click', () => {
//   return toggleMenu(dropdown);
// });

// let dropdowns = document.querySelectorAll('.dropdown');
// dropdowns = Array.from(dropdowns).map( dropdown => new Dropdown(dropdown));

//services

class Tab {
  constructor(element) {
    this.element = element;
    this.tabData = this.element.dataset.tab;

    if(this.card){
      this.card = document.querySelector(`.card[data-tab="${this.tabData}"]`);
    }

    //click event listener
    this.element.addEventListener('click', () => {
    this.selectTab();
    });  
  }

  selectTab() {
    const tabs = document.querySelectorAll('.tab');

    Array.from(tabs).forEach(function(tab){
      tab.classList.remove('active-tab')
    })

    this.element.classList.add('active-tab');

    const tabitem = document.querySelector('.tab-item')
    tabitem.style.display = "none";

    this.card.forEach(card => card.selectTab());
  }
}

class TabItem {
  constructor(element){
    this.element = element;
  }

  selectTab(){
    this.element.style.display = "";
  }
}

let tabs = document.querySelectorAll('.tab');
tabs = Array.from(tabs).map(element => {
  return new TabLink(element)
});
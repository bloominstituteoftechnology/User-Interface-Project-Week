class TabLink {
  constructor( element ) {
    this.element = element;
    this.data = element.dataset.tab;
    this.tabElement = document.querySelector( `.tab[data-tab="${this.data}"]` );
    this.element.addEventListener( 'click', () => {this.deselect(); this.select(); currentTab = this});
  }

  select () {
    this.element.classList.add('current-tab');
    this.tabElement.style.display = 'flex';
  }
  deselect () {
    currentTab.tabElement.style.display = 'none';
    currentTab.element.classList.remove('current-tab');
  }
}

let tabLinks = Array.from( document.querySelectorAll( '.tab-link' ) ).map( link => new TabLink( link ) );

tabLinks[1].select();
let currentTab = tabLinks[1];

// JS goes here
function menuToggle() {
  document.querySelector('.cta').classList.toggle('nav-expanded');
  document.querySelector('.menu').classList.toggle('menu-toggle');
}

document.querySelector('.hamburger').addEventListener('click', (e) => {
  if (e.target.attributes.src.nodeValue === './img/nav-hamburger-close.png') {
    e.target.setAttribute('src', './img/nav-hamburger.png');
    menuToggle();
  } else {
  e.target.setAttribute('src', './img/nav-hamburger-close.png');
  menuToggle();
}
}) //Toggles menu

// document.body.addEventListener('wheel', function() {
//   console.log('Is listening');
//   document.querySelector('.custom-nav').classList.add('nav-scroll');
// });

class Tabs {
  constructor(element) {
    this.element = element;
    this.links = this.element.querySelectorAll('.tabs-link'); //will create a reference to '.tabs-links' nested inside of .tabs
    this.links = Array.from(this.links).map(link => {
      return new TabsLink(link, this)
    }); //create an array of link constructors out of hte .tabs-link elements
    this.activeLink = this.links[0]; //sets the first link in the array as the active link
    //console.log(this.activeLink);
    this.init(); //invokes the init method which will invoke the select() method on the chosen link to make it active. Note select() is defined on the TabsLink constructor not the Tabs constructor
  }

  init() {
    this.activeLink.select();
  }

  updateActive(newActive) {
    this.activeLink.deselect(); //invokes TabsLink's deselect method on the active link
    this.activeLink = newActive; //assigns this.activeLink to the newActive link
  } //updates the active tab when a new tab is clicked

  getTab(data) {
    return this.element.querySelector(`.tabs-item[data-tab="${data}"]`);
  }
}

class TabsLink {
  constructor(element, parent) {
    this.element = element;
    this.tabs = parent; //creates a reference to the parent element .tabs
    this.tabsItem = parent.getTab(this.element.dataset.tab); //passes in a reference to the tab links custom data attribute
    this.tabsItem = new TabsItem(this.tabsItem);
    //console.log(this.tabs);
    this.element.addEventListener('click', () => {
      this.tabs.updateActive(this);
      this.select();
    });
  }

  select() {
    this.element.classList.add('tabs-link-active'); //selects the tabs link
    this.tabsItem.select(); //invokes the TabsItem method which selects the actual item that corresponds to the tabs link
  }

  deselect() {
    this.element.classList.remove('tabs-link-active');
    this.tabsItem.deselect();
  }
}

class TabsItem {
  constructor(element) {
    this.element = element;
  }

  select() {
    this.element.classList.add('tabs-item-selected'); //selects the tabs item corresponding to the tabs link
  }

  deselect() {
    this.element.classList.remove('tabs-item-selected');
  }
}

let tabs = document.querySelectorAll('.tabs');
//console.log(tabs);
tabs = Array.from(tabs).map(tab => new Tabs(tab));

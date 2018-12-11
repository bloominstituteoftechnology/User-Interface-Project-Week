// GLOBAL VARIABLES
const body = document.querySelector('body');

// ====================== NAVIGATION 
// VARIABLES
const hamburgerMenu = document.querySelector('.hamburger-menu');
const closeMenu = document.querySelector('.close-menu');
const nav = document.querySelector('nav');
const navBar = document.querySelector('.top-nav');

// EVENT LISTENERS
hamburgerMenu.addEventListener('click', () => toggleMenu())
closeMenu.addEventListener('click', () => toggleMenu());

// CALLBACK FUNCTIONS
toggleMenu = function () {
  hamburgerMenu.classList.toggle('hide')
  closeMenu.classList.toggle('hide');
  nav.classList.toggle('open');
  body.classList.toggle('overflow-hidden');
}


// ====================== SERVICES TAB NAVIGATOR
// CLASS CONSTRUCTOR

class TabButton {
  constructor(element) {
    this.element = element;
    console.log(this.element);

    this.data = this.element.dataset.tab;
    console.log(this.data);

    this.itemElement = document.querySelector(`.tab-button[data-tab='${this.data}']`);
    console.log(this.itemElement);

    this.tabContent = new TabContent(this.itemElement);

    this.element.addEventListener('click', () => this.select());

  }
  select() {
    // Get all of the elements with the tabs-link class
    const links = document.querySelectorAll('.services-content');
    // Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
    links.forEach(element => element.classList.remove('tabs-link-selected'));
    // Add a class named "tabs-link-selected" to this link
    this.element.classList.add('tabs-link-selected');
    // Call the select method on the item associated with this link
    this.tabItem.select();
  }
}


class TabContent {
  constructor(element) {
    this.element = element;
  }

  select() {
    // Select all ".tabs-item" elements from the DOM
    const items = document.querySelectorAll('.services-content');
    // Remove the class "tabs-item-selected" from each element
    items.forEach(param => param.classList.remove('hidden'));
    // Add a class named "tabs-link-selected" to this link;
    this.element.classList.add('hidden');
  }
}


// VARIABLES
const tabButtons = document.querySelectorAll('.tab-button');
tabButtons.forEach(tab => new TabButton(tab));
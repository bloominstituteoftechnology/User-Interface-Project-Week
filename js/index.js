// JS goes here

// class for dropdown Menu

class Dropdown {
  constructor(element) {
    this.element = element;

    this.button = this.element.querySelector('.dropdown-button'); // hamburger icon
    this.content = this.element.querySelector('.dropdown-content'); // every linked element in the dropdown menu

    this.button.addEventListener('click', () => {
      this.toggleContent();
    });
  }


// create the toggleContent() method for use with the Dropdown class

toggleContent() {
  this.content.classList.toggle('dropdown-hidden'); // dropdown-content elements also contain the dropdown-hidden property for use with the toggle

  // if the content is hidden, use the default hamburger icon; otherwise (menu open), present the icon to close it

  if (this.content.classList.contains('dropdown-hidden')) {
    this.button.src = './img/nav-hamburger.png';
  }
  else {
    this.button.src = './img/nav-hamburger-close.png';
  }
 }
} //dropdown class

let dropdowns = document.querySelectorAll('.dropdown');
dropdowns = Array.from(dropdowns).map( dropdown => new Dropdown(dropdown)); // mapping new dropdown elements via the Dropdown class

// tab navigation code

//establish TabLink class and associated select() method

class TabLink {
  constructor(element) {
    this.element = element;
    this.data = this.element.dataset.tab;
    this.item = document.querySelector(`.tabs-item[data-tab = "${this.data}"]`);
    this.tabItem = new TabItem(this.item);
    this.element.addEventListener('click', () => {
      this.select();
    });
  };

  select() {
    const links = document.querySelectorAll('.tabs-link');

    links.forEach(link => {
      link.classList.remove('tabs-link-selected');
    });

    this.element.classList.add('tabs-link-selected');

    this.tabItem.select();
    // console.log('works');
  }
} // TabLink

// establish TabItem to call with TabLink and associated select() method

class TabItem {
  constructor(element) {
    this.element = element;
  }

  select() {
    let items = document.querySelectorAll('.tabs-item');

    items.forEach(item => {
      item.classList.remove('tabs-item-selected');
    });

    this.element.classList.add('tabs-item-selected');
    // console.log('working');
  }

} // TabItem

let links = document.querySelectorAll('.tabs-link');
links = Array.from(links).map( link => new TabLink(link));

links[0].select();

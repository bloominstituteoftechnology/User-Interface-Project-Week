// JS goes here

// replace images if screen width is below 500px

const switchImages = (id, src) => {
  console.log(id);
  id = document.getElementById(id);

  screen.width < 501 ? id.setAttribute('src', src) : true;
}

// target the fa-bars
const bars = document.querySelector('.fa-bars');

// add click event to toggle navbar display
bars.addEventListener('click', () => {

  // get navbar and display it
  let nav = document.querySelector('.navbar');
  nav.style.display = 'flex';

  // hide bars
  bars.style.display = 'none';

  // show close;
  close.style.display = 'block';
});

// set up the close icon to close navbar when clicked
const close = document.querySelector('.close');
close.addEventListener('click', () => {

  // get navbar and hide it
  let nav = document.querySelector('.navbar');
  nav.style.display = 'none';

  // hide close
  close.style.display = 'none';

  // show hamburger
  bars.style.display = 'block';
});


// JavaScript for Services Page //

// create a class for each tab-link
class TabLink {
  constructor(element) {
    this.element = element;

    // get the data attribute that links tab and container
    this.data = this.element.dataset.tab;

    // get associated container
    this.containerElement = document.querySelector(`.tab-container[data-tab="${this.data}"]`);

    // create a new TabContainer
    this.container = new TabContainer(this.containerElement);

    // add an event listener to tab-link to change containers
    this.element.addEventListener('click', () => {
      this.select();
    });

  }
  select() {

    // get all tab-link elements
    const links = document.querySelectorAll('.tab-link');

    // deselect all links
    this.deselect(links);

    // add className 'tab-link-selected' to this link
    this.element.classList.add('tab-link-selected');

    // call select method for tabContainer class
    this.container.select();
  }
  deselect(links) {
    Array.from(links).forEach((link) => {
      link.classList.remove('tab-link-selected');
    });
  }
}

// create a clas for each tab-container
class TabContainer {
  constructor(element) {
    this.element = element;
  }
  select() {
    // select all tab containers
    const containers = document.querySelectorAll('.tab-container');

    // deselect all selected containers
    this.deselect(containers);

    // add a className "tab-container-selected"
    this.element.classList.add('tab-container-selected');
  }
  deselect(containers) {
    // remove all class 'tab-container-selected'
    Array.from(containers).forEach((container) => {
      container.classList.remove('tab-container-selected');
    })
  }
}

// create a nodeList of tab-links
let tabLinks = document.querySelectorAll('.tab-link');
// coierce into array and assign to class TabLink
tabLinks = Array.from(tabLinks).map((link) => new TabLink(link));

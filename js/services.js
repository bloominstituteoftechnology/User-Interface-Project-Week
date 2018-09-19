
// change background image url if below 500px
let ctaServices = document.querySelector('.cta-services');
if (screen.width < 501) {
ctaServices.style.backgroundImage = 'url(./img/services/services-mobile-jumbotron.png)';
}

switchImages("pre-construction", './img/services/services-tab-mobile-pre-construction-img.png');
switchImages("construction", './img/services/services-tab-mobile-construction-img.png');
switchImages("design-build", './img/services/services-tab-mobile-design-build-img.png');
switchImages("sustainability", './img/services/services-tab-mobile-sustainability-img.png');


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

    // add animation to element to stop the immediate change onclick
    TweenMax.fromTo(this.element,2,{opacity:0},{opacity:1});
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

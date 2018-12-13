// JS goes here

//---------- Tab Navigator Functionality Here --------------//
class TabLink{
    constructor(element){
      this.element = element;
      this.data = this.element.dataset.tab;
      this.itemElement = document.querySelector(`.tabs-item[data-tab='${this.data}']`);
      this.itemElement = new TabItem(this.itemElement);
      this.element.addEventListener('click', () => {this.select()});
    };
    select() {
      const links = document.querySelectorAll('.tabs-link');
      Array.from(links).forEach(links => links.classList.remove('tabs-link-selected'));
      this.element.classList.add('tabs-link-selected');   
      this.itemElement.select();
    }
}
  class TabItem {
    constructor(element) {
      this.element = element;
    }
    select() {
      const items = document.querySelectorAll('.tabs-item');
      items.forEach(items => items.classList.remove("tabs-item-selected"));
      this.element.classList.add("tabs-item-selected");
    }
  }
links = document.querySelectorAll('.tabs-link').forEach( element => new TabLink(element));

// ------------- Nav Overlay Expand and Close  --------------- //

class NavLink {
  constructor (link) {
      this.link = link;
      this.link.addEventListener('click', toggleNavClose) 
  };
}

const toggleNavOpen = () => {
  navOpen.classList.toggle('overlay-expand-toggle');
  navClose.classList.toggle('overlay-close-toggle');
  TweenMax.from(nav, 2, {
      ease: Power2.easeOut,
      height: "0",
      width: "0",
      right: "0",
      top: "0",
      fontSize: "0",
      lineHeight: "0"
  });
  TweenMax.to(nav, 2, {
      ease: Power2.easeOut,
      height: "100%",
      width: "100%",
      top: "0",
      position: "fixed",
      fontSize: "48",
      lineHeight: "2",
  });
  nav.classList.toggle('nav-overlay-display');
}

const toggleNavClose = () => {
  navOpen.classList.toggle('overlay-expand-toggle');
  navClose.classList.toggle('overlay-close-toggle');
  TweenMax.from(nav, 1, {
      ease: Power2.easeIn,
      height: "100%",
      width: "100%",
      top: "0",
      position: "fixed",
      fontSize: "48",
      lineHeight: "2"
  });
  TweenMax.to(nav, 1, {
      ease: Power2.easeIn,
      height: "0",
      width: "0",
      right: "0",
      top: "0", 
      fontSize: "0",
      lineHeight: "0",
      onComplete: () => nav.classList.toggle('nav-overlay-display')
  });
}

const navOpen = document.querySelector('.overlay-expand');
const navClose = document.querySelector('.overlay-close');
const nav = document.querySelector('.nav-overlay');
const navLinks = document.querySelector('.nav-links');
const navLink = document.querySelectorAll('.nav-link');

navOpen.addEventListener('click', toggleNavOpen);
navClose.addEventListener('click', toggleNavClose);
navLink.forEach( navLink => new NavLink(navLink));
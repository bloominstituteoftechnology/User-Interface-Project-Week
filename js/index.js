// JS goes here

class Tab {
  constructor(element) {
    this.element = element;
    console.log(this.element);
  }
}


let tabs = document.querySelectorAll(".btn");

tabs = Array.from(tabs).map(tab => new TabCard(tab));
// JS goes here

// Old Nav code

// class Nav {
//   constructor(element) {
//     this.element = element;
//     this.button = this.element.querySelector('.menu-button');
//     this.content = this.element.querySelector('.menu-content');
//     this.closeButton = this.element.querySelector('.close-button');
//     this.button.addEventListener('click', event => this.toggleContent(event));
//     this.closeButton.addEventListener('click', event => this.toggleContent(event));
//   }
//   toggleContent() {
//     this.content.classList.toggle('menu-hidden');
//     this.button.classList.toggle('close-hidden');
//     this.closeButton.classList.toggle('close-hidden');
//   }
// }
//
// let links = document.querySelectorAll('.menu');
// links = Array.from(links).map(link => new Nav(link));

// New nav code

class Nav {
  constructor(element) {
    this.element = element;
    this.button = this.element.querySelector('.nav-open');
    this.content = this.element.querySelector('.nav-content');
    this.close = this.element.querySelector('.nav-close');
    this.button.addEventListener('click', event => this.toggleContent(event));
    this.close.addEventListener('click', event => this.toggleContent(event));
  }
  toggleContent() {
    this.content.classList.toggle('hidden');
    this.button.classList.toggle('hidden');
    this.close.classList.toggle('hidden');
  }
}
let links = document.querySelectorAll('.nav');
links = Array.from(links).map(link => new Nav(link));

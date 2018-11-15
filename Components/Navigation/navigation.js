class Navigation {
  constructor(element) {
    this.element = element;
    this.button = this.element.querySelector('#menu-button');
    this.menu = this.element.querySelector('.links');
    this.bar = this.element.querySelector('.main-nav-bar')

    this.button.addEventListener('click', (event) => {
      this.menu.classList.toggle('links-open')
  })


}
}
let navBar = document.querySelector('.site-navigation');
navBar = new Navigation(navBar);
console.log(navBar);

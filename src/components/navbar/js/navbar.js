import Button from '../button/js/button.js';
import Overlay from '../overlay/js/overlay.js';
import Link from '../link/js/link.js';

function Navbar(element) {
  this.element = element;

  // Navbar
  this.component = document.createElement('nav');
  this.component.classList.add('navbar');
  this.element.appendChild(this.component);

  // Top container
  this.topContainer = document.createElement('div');
  this.topContainer.classList.add('top-container');
  this.component.appendChild(this.topContainer)

  // Logo
  this.logo = document.createElement('span');
  this.logo.classList.add('logo');
  this.logo.innerHTML = `S&J`;
  this.topContainer.appendChild(this.logo);

  // Overlay
  this.overlay = new Overlay(this.element);

  // Menu container
  this.menu = document.createElement('ul');
  this.menu.classList.add('menu');
  this.component.appendChild(this.menu);

  // Menu items
  this.items = [{
    text: "Home",
    href: "./index.html"
  }, {
    text: "Services",
    href: "./services.html"
  }, {
    text: "Contact",
    href: "./contact.html"
  }];
  this.setMenuItems(this.menu, this.items);

  // Button
  this.button = new Button(this.topContainer, this.overlay, this.menu);

  this.overlay.click(this.button, this.overlay, this.menu);

}

Navbar.prototype.setMenuItems = function(menu, arr) {
  arr.forEach(function(obj) {
    new Link(menu, obj);
  });
}

export default Navbar;

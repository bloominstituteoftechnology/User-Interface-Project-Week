// JS goes here

//Navigation
const toggleMenu = () => {menu.classList.toggle('menu--open');
  // Toggle the "menu--open" class on your menu refence. 
};
const toggleClose = () => {hamburger.classList.toggle('menu--close');
};
// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu-hidden');
const hamburger = document.querySelector('.menu-seen');
// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.hamburger');
const menuClosed = document.querySelector('.x');
// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener('click', toggleMenu);
menuClosed.addEventListener('click', toggleClose);


//class DropDown {
 // constructor (element) { //element = div class="navigation"
    this.element = element;

    this.menuOpen = this.element.querySelector('.hamburger'); //img class="hamburger" src="./img/nav-hamburger.png"
    this.menuClosed = this.element.querySelector('.x'); //img class="x" src="./img/nav-hamburger-close.png"

    this.menuItems = this.element.querySelector('.menuSeen');

    this.menuOpen.addEventListener('click', () => this.expandMenu());
    this.menuClosed.addEventListener('click', () => this.closeMenu());
 //}

  //expandMenu() {
    this.menuOpen.style.display = 'none';
   this.menuClosed.style.display = 'block';
    this.menuItems.classList.add('menuList');
  //}

  //closeMenu() {
    this.menuOpen.style.display = 'block';
    this.menuClosed.style.display = 'none';
    this.menuItems.classList.remove('menuList');
  //}
//}
//let menuDropdown = document.querySelector('.navigation') //div class="navigation"
//menuDropdown = new DropDown(menuDropdown);
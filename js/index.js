// JS goes here
class DropDown{
  constructor(element) {
    this.element = element;

    this.menuOpen = this.element.querySelector('.openMe');
    this.menuClose = this.element.querySelector('.closeMe');

    this.menuItems = this.element.querySelector('.dropdown-content');

    this.menuOpen.addEventListener('click', () => this.expandMenu());
    this.menuClose.addEventListener('click', () => this.closeMenu());
  }

  expandMenu(){
    this.menuOpen.style.display = 'none';
    this.menuClose.style.display = 'block';
    this.menuItems.classList.add('menuList');
  }

  closeMenu(){
    this.menuOpen.style.display = 'block';
    this.menuClose.style.display = 'none';
    this.menuItems.classList.remove('menuList');
  }
}

let menuDropdown = document.querySelector('.menu-container');
menuDropdown = new DropDown(menuDropdown);
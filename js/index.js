class Dropdown {
  constructor(dropdown) {
    this.element = dropdown;
    this.menuClose = this.element.querySelector('.hamburger-close');
    this.menuOpen = this.element.querySelector('.hamburger-open');
    this.content = this.element.querySelector('.expanded-nav');

    this.menuClose.addEventListener('click', () => { this.openMenu()});
    this.menuOpen.addEventListener('click', () => { this.closeMenu()});
  }

  openMenu() {
    this.content.classList.toggle('dropdown-hidden');
    this.menuClose.classList.toggle('dropdown-hidden');
    // this.menuOpen.classList.toggle('dropdown-hidden');
 
    // this.menuClose.style.display = 'none';
    // this.menuOpen.style.display = 'inherit';
  }
  closeMenu() {
    this.menuOpen.style.display = 'inline-block';
    this.content.classList.toggle('dropdown-hidden');
    this.menuClose.classList.toggle('dropdown-hidden')
  }
}

// Nothing to do here, just study what the code is doing and move on to the Dropdown class
let dropdowns = document.querySelectorAll('.main-navigation');
dropdowns = Array.from(dropdowns).map( dropdown => new Dropdown(dropdown));
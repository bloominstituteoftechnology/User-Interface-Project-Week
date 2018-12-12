class Navbar {
    constructor() {
      this.expandButton = document.querySelector('.menubutton');
      this.expandButton.addEventListener('click', (e) => this.expandNav(e));
    }
  
    expandNav() {
      navbar.classList.toggle('nav-open');
    }
  }
  
const navbar = document.querySelectorAll('.mainnav');

navbar.forEach( () => {
  return new Navbar();
})
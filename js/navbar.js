class Navmenu {
    constructor() {
      this.menubutton = document.querySelector('.menubutton');
      this.menubutton.addEventListener('click', (e) => this.expandNav(e));
    }
  
    expandNav() {
      document.querySelector('.mainnav').classList.toggle('nav-open');
    }
  }
  
const navbar = document.querySelectorAll('.mainnav');

navbar.forEach( () => {
  return new Navmenu();
})
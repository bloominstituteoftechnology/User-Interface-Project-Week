// JS goes here
class MenuLogic {
    constructor(domElements) {
        //Sets up navbar object
        this.domElements = domElements;
        //Goes into the navbar to find hamburger picture
        this.menuButton = this.domElements.querySelector(".hamburger");
        //Goes into the navbar to find the hidden menu
        this.menu = this.domElements.querySelector('.navbar-menu');
        //Checks if menu is open (true) or closed(false)
        this.menuActiveVariable = false;
        //Adds event listener to hamburger menu
        this.menuButton.addEventListener('click', this.toggleMenu.bind(this))
    }

    toggleMenu() {
        //Menu closed
        if (this.menuActiveVariable === false) {
            //resets to default style of navbar
            this.domElements.style.height = 'auto';
            this.menuButton.src = "img/nav-hamburger.png";
            this.domElements.style.position = 'sticky';
            this.domElements.style.left = 'auto';
            this.domElements.style.right = 'auto';
            this.domElements.style.height = 'auto';
            this.menu.style.display = 'none';
            this.domElements.style.opacity = '1';
        }
        //menu open
        else if (this.menuActiveVariable) {
            //see through effect
            this.domElements.style.opacity = '0.95';
            //overlays the menu on top of the page 
            this.domElements.style.zIndex = '1';

            //Menu stays on screen even if user scrolls
            this.domElements.style.position = 'fixed';
            this.domElements.style.left = '0';
            this.domElements.style.right = '0';
            //take up all of the viewport
            this.domElements.style.height = '100vh';
            //Changes the display:none to display:block
            this.menu.style.display = "block";
            //Changes the hamburger menu to an X
            this.menuButton.src = "img/nav-hamburger-close.png"
        }
        this.menuActiveVariable = !this.menuActiveVariable;
    }

}
//Finds the navbar
const nav = document.querySelector('.navbar');
//passes the navbar into MenuLogic
new MenuLogic(nav);


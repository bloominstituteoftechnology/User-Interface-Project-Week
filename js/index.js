// JS goes here
class MenuLogic {
    constructor(domElements) {
        this.domElements = domElements;
        this.menuButton = this.domElements.querySelector(".hamburger");
        this.menu = this.domElements.querySelector('.navbar-menu'); 
        this.toggleVariable = false;
        this.menuButton.addEventListener('click', this.toggleMenu.bind(this))
    }

    toggleMenu() {
        if (this.toggleVariable === false) {
            this.domElements.style.opacity = '0.9';
            this.domElements.style.zIndex = '1';


            this.domElements.style.position = 'fixed';
            this.domElements.style.left = '0';
            this.domElements.style.right = '0';
            this.domElements.style.height = '100vh';
            
            this.menu.style.display = "block";
            this.menuButton.src = "img/nav-hamburger-close.png"
        }
        else if (this.toggleVariable) {
            this.domElements.style.height = 'auto';
            this.menuButton.src = "img/nav-hamburger.png";
            this.domElements.style.position = 'relative';
            this.domElements.style.left = 'auto';
            this.domElements.style.right = 'auto';
            this.domElements.style.height = 'auto';
            this.menu.style.display = 'none';
        }
        this.toggleVariable = !this.toggleVariable;
        console.log(this.toggleVariable)
    }

}

const nav = document.querySelector('.navbar');
new MenuLogic(nav);


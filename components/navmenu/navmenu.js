

//==============================================================================

class NavMenu {
    constructor(containerElement){
        this.element = containerElement;
        this.expanderElement = this.element.querySelector('.main-navigation__expander')
        this.toggleElement = this.element.querySelector('.main-navigation__toggle');
        this.toggleElement.addEventListener("click", () => this.toggle());
        this.close();
    }
    toggle(){
        if(this.currentlyOpen){ this.close();}
        else                  { this.open ();}
    }
    close(){
        this.toggleElement.src = "/img/nav-hamburger.png";
        this.element.classList.remove('expanded');
        this.currentlyOpen = false;
    }
    open(){
        this.toggleElement.src = "/img/nav-hamburger-close.png";
        this.element.classList.add('expanded');
        this.currentlyOpen = true;
    }
}
new NavMenu(document.querySelector('.main-navigation'));
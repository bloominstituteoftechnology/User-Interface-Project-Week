

//==============================================================================

class NavMenu {
    constructor(containerElement){
        this.element = containerElement;
        this.toggleElement = this.element.parentElement.querySelector('.nav-menu__toggle');
        this.toggleElement.addEventListener("click", () => this.toggle());
        this.close();
    }
    toggle(){
        if(this.open){ this.close();}
        else         { this.open ();}
    }
    close(){
        this.toggleElement.src = "/img/nav-hamburger.png";
        this.open = false;
    }
    open(){
        this.toggleElement.src = "/img/nav-hamburger-close.png";
        this.open = true;
    }
}
new NavMenu(document.querySelector('.nav-menu'));
// JS goes here


//NAV TOGGLE
class ShowMenu {
    constructor(domElement) { //.nav
        this.domElement = domElement; //this/domElement = .nav
        this.toggleButton = this.domElement.querySelector('.menu-nav'); //.nav.toggleButton =

        this.toggleButton.addEventListener('click', this.expandNav());
    
    }

    expandNav() {
        this.domElement.classList.toggle('show');
    }

}

const navs = document.querySelectorAll('.nav').forEach(function (navs) {
    return new ShowMenu (navs)
});


// JS goes here


//NAV TOGGLE
class ShowMenu {
    constructor(domElement) { 
        this.domElement = domElement; 
        this.toggleButton = this.domElement.querySelector('.menu-nav'); 

        this.toggleButton.addEventListener('click', this.expandNav);

    }

    expandNav() {
        const navs = document.querySelectorAll('.nav');

        Array.from(navs).forEach(element => element.classList.toggle('show'));
    }

}

const navs = document.querySelectorAll('.nav').forEach(function (navs) {
    return new ShowMenu(navs)
});


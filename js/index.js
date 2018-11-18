// JS goes here


//NAV TOGGLE
class ShowMenu {
    constructor(domElement) {
        this.domElement = domElement;

        this.toggleButton = this.domElement.querySelector('.menu-nav');
        console.log(this.toggleButton)

        this.toggleButton.addEventListener('click', this.expandNav());
    
    }

    expandNav() {
        this.domElement.classList.toggle('show');
    }

}

const navs = document.querySelectorAll('.nav').forEach(function (navs) {
    return new ShowMenu (navs)
});


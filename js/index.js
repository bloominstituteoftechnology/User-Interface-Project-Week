// JS goes here
class ToggleMenu {
    constructor(elem) {
        this.elem = elem;

        // reference for drop down button
        this.button = document.querySelector('.dropdownButton');

        // reference for drop down content
        this.content = document.querySelector('.dropdownContent');

        //event listener
        this.button.addEventListener('click', () => this.toggleContent());
    }
    toggleContent() {
        this.content.classList.toggle('dropdownHidden');
        if (!this.content.classList.contains('dropdownHidden')) {
            this.button.src = "../img/nav-hamburger-close.png";
        } else {
            this.button.src = "../img/nav-hamburger.png";
        }
    }
}

// reference to drop down content element
let dropdowns = document.querySelectorAll('.dropdown').forEach(dropdown => new ToggleMenu(dropdown));


// Tab Section For Services Page
// class TabLink {
//     constructor(elem) {
//         // Individual Tabs
//         this.elem = elem;

//         // Data Attribute
//         this.data = this.elem.dataset.tab;

//         // Item Selector
//         this.itemElem = document.querySelector(`.tabs-item[data-tab = '${this.data}']`);

//     }
// }


// const links = document.querySelectorAll('.tabs-link').forEach(tab => new TabLink(tab));


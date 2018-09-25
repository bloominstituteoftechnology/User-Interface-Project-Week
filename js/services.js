class TabLink {
    constructor(element) {
        this.element = element;
        this.data = this.element.dataset.tab;

        this.itemElement = document.querySelector(`.tab-item[data-tab="${this.data}"]`);
        this.tabItem = new TabItem(this.itemElement);
        
        this.element.addEventListener('click', (event) => {this.select(); event.preventDefault();});
    };

    select() {
        const tabLinks = document.querySelectorAll('.tab-link');
        Array.from(tabLinks).forEach(item => item.classList.remove('tab-link-selected'));

        this.element.classList.add('tab-link-selected');
        this.tabItem.select();
    }
}

class TabItem {
    constructor(element) {
        this.element = element;
    }

    select() {
        let items = document.querySelectorAll('.tab-item');
        items.forEach(item => item.classList.remove('tab-item-selected'));

        this.element.classList.add('tab-item-selected');
    }
}

let links = document.querySelectorAll('.tab-link');
links = Array.from(links).map(link => {return new TabLink(link);});
links[0].select();


// Navigation JS -----------------------------------------------
let dropdown = document.querySelector(".dropdown-button");
dropdown.addEventListener('click', function() {
    // change the hamburger to an X
    dropdown.src = "../img/nav-hamburger-close.png";
    
    // toggle the class to hide the nav menu
    let content = document.querySelector(".dropdown-content");
    content.classList.toggle('dropdown-hidden');

    // toggle the X back to hamburger
    if (content.classList.contains('dropdown-hidden') === true) {
        dropdown.src = "../img/nav-hamburger.png";
    }
});
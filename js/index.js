// JS goes here
function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}




class TabLink {
    constructor(element) {
        this.element;

        this.data = this.element.dataset.tab;

        this.itemElement = document.querySelector(`.tabs-item[data-tab="${this.data}"]`);
    }
}















let links = document.querySelectorAll('.tabs-link'); 

links = Array.from(links).map(element => new TabLink(element));
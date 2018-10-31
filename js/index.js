// JS goes here

class TabLink {
    constructor(tab) {
        this.tab = tab;
    }

    // Methods
}

class TabCard {
    constructor(card) {
        this.card = card;
    }
}


// Initial Dom Reference

let tabs = document.querySelectorAll('.tab');

tabs = Array.from(tabs).map(tab => new TabLink(tab));

console.log(tabs);
// JS goes here

class TabLink {
    constructor(tab) {
        this.tab = tab;
        this.data = this.tab.dataset.tab;
        this.cardElement = document.querySelector(`.card[data-tab='${this.data}']`);

        this.card = new TabCard(this.cardElement);

        console.log(this.card);
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
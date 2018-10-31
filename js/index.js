// JS goes here

class TabLink {
    constructor(tab) {
        this.tab = tab;
        this.data = this.tab.dataset.tab;
        this.cardElement = document.querySelector(`.card[data-tab='${this.data}']`);

        this.card = new TabCard(this.cardElement);

        this.tab.addEventListener('click', () => this.handleClick());
    }

    // Methods
    handleClick() {
        console.log('click works');

        const tabs = document.querySelectorAll('.tab');

        tabs.forEach(tab => tab.classList.remove('active-tab'));

        const cards = document.querySelectorAll('.card');

        cards.forEach(card => card.style.display = 'none');

        this.tab.classList.toggle('active-tab');

        this.card.show();


    }
}

class TabCard {
    constructor(card) {
        this.card = card;
    }

    show() {
        this.card.style.display = 'flex';
    }

    hide() {
        this.card.style.display = 'none';
    }
}


// Initial Dom Reference

let tabs = document.querySelectorAll('.tab');

tabs = Array.from(tabs).map(tab => new TabLink(tab));



// Navigation
const navOpen = document.querySelector('#nav-open');

const navClose = document.querySelector('#nav-close');

const nav = document.querySelector('nav');


console.log(navClose);

navOpen.addEventListener('click', () => {
    console.log(nav);
    nav.classList.remove('hide-nav');
    navOpen.classList.add('hide-nav');
    navClose.classList.remove('hide-nav');
});

navClose.addEventListener('click', () => {
    console.log(nav);
    nav.classList.add('hide-nav');
    navOpen.classList.remove('hide-nav');
    navClose.classList.add('hide-nav');
});
// JS goes here
class Hamburger {
    constructor(element) {
        this.element = element;
        this.parent = document.querySelector('.navContainer');
        this.linksContainer = document.querySelector('.hamContainer')
        this.element.addEventListener('click', () => { this.toggleNav(); });
        this.closed = true;
    }

    toggleNav() {
        console.log(this.linksContainer);
        this.linksContainer.classList.toggle('displayHam');
        this.parent.classList.toggle('navFixed');
        if (this.closed === true) {
            this.closed = false;
            this.element.src = 'img/nav-hamburger-close.png';
        }
        else {
            this.closed = true;
            this.element.src = 'img/nav-hamburger.png';
        }
    }
}

class TabController {
    constructor(element) {
        this.links = document.querySelectorAll('.tab');
        this.links = Array.from(this.links).map(link => {
            link = new Tab(link);
            return link;
        });

        this.links[0].select();
        this.selected = this.links[0];
    }
}

class Tab {
    constructor(element, controller) {
        this.element = element;
        this.controller = controller;

        this.data = element.dataset.tab;
        this.card = document.querySelector(`.card[data-tab='${this.data}']`);
        this.card = new Card(this.card);

        this.element.addEventListener('click', () => { this.select(); });
    }

    select() {
        this.deselect();
        this.element.classList.add('tab-selected');
        this.card.select();
    }

    deselect() {
        const tabs = document.querySelectorAll('.tab');
        tabs.forEach(tab => {
            tab.classList.remove('tab-selected');
        });
    }
}

class Card {
    constructor(element) {
        this.element = element;
    }

    select() {
        this.deselect();
        this.element.classList.add('card-visible');
    }

    deselect() {
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            card.classList.remove('card-visible');
        })
    }
}

let hamburger = document.querySelector('.hamburger');
hamburger = new Hamburger(hamburger);

const tabController = new TabController();

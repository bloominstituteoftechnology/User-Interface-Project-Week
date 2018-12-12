// ============================== Navbar

const toggleMenu = () => {
    menu.style.display = 'block';
    menuButton.style.display = 'none';
    menuX.style.display = 'block'; 
}   

const toggleMenuX = () => {
    menu.style.display = 'none';
    menuX.style.display = 'none';
    menuButton.style.display = 'block'; 
}

const menu = document.querySelector('.menu');

const menuButton = document.querySelector('.menu-button');

const menuX = document.querySelector('.menu-x');

menuButton.addEventListener('click', () => toggleMenu());

menuX.addEventListener('click', () => toggleMenuX());

// ============================== Services Tabs

class TabLink {
    constructor(element) {
        this.element = element;
        this.data = this.element.dataset.tab;
        this.cards = document.querySelector(`.card[data-tab='${this.data}']`);
        this.cards = new TabCard(this.cards);
        this.element.addEventListener('click', () => {this.select()});
    }

    select() {
        const tab = document.querySelectorAll('.tab');
        Array.from(tab).forEach( tabs => tabs.classList.remove('active-tab'));
        this.element.classList.add('active-tab');
        this.cards.selectCard();
    }
}

class TabCard {
    constructor(element) {
        this.element = element;
    }
    selectCard() {
        const card = document.querySelectorAll('.card');
        Array.from(card).forEach( card => card.classList.remove('active-card'));
        this.element.classList.add('active-card');
    }
}

tabs = document.querySelectorAll('.tab');

tabs.forEach( element => new TabLink(element));
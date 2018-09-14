const hamburger = document.querySelector('.hamburger');
const header = document.querySelector('.header');
const links = document.querySelector('.links');
const close = document.querySelector('.close');
let buttons = document.querySelectorAll('.button');

const expandMenu = (event) => {
    header.classList.toggle('expand');

    if (links.style.display === 'block') {
    links.style.display = 'none';
    } else {
        links.style.display = 'block';
    }

    if (close.style.display === 'block') {
        close.style.display = 'none';
        hamburger.style.display = 'block';
    } else {
        close.style.display = 'block';
        hamburger.style.display = 'none';
    }
}

hamburger.addEventListener('click', expandMenu);
close.addEventListener('click', expandMenu);


//services page component
class Tab {
    constructor(element) {
        this.element = element;
        this.data = this.element.dataset.tab;
        this.itemElement = document.querySelector(`.card[data-tab="${this.data}"]`);
        this.cardItem = new Card(this.itemElement);

        this.element.addEventListener('click', () => {this.deselect()});
        this.element.addEventListener('click', () => {this.select()});

    };

    select() {
        const buttons = document.querySelectorAll('.button');
        this.element.classList.add('buttonSelected');
        this.cardItem.select();
    };

    deselect() {
        let lastClicked = document.querySelector('.buttonSelected')
        lastClicked.classList.remove('buttonSelected');
    };

}

class Card {
    constructor(element) {
        this.element = element;
    };

    select() {
    const items = document.querySelectorAll('.card');

    Array.from(items).forEach((item) => {
        item.classList.remove('cardSelected');
    });

    this.element.classList.add('cardSelected');

    };
}







buttons = Array.from(buttons).map((link) => {
    return new Tab(link);
});
console.log(buttons);
buttons[0].select();


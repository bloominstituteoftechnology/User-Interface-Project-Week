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
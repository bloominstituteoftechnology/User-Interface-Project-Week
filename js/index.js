//NAVIGATION TOGGLE

class NavExpanded {
    constructor(element) {
        this.element = element;
        this.element.addEventListener('click', () => {
            this.select();
        });
    }

    select() {
        const navigation = document.querySelectorAll('.navigation');
        navigation.forEach(navBar => {
            navBar.classList.toggle('nav--expanded');
        });
    }
}


let navButtons = document.querySelectorAll('.navigation .nav-button').forEach(navButton => new NavExpanded(navButton));



//SERVICES TABS
class Button {
    constructor(element) {
        this.element = element;
        this.data = this.element.dataset.tab;
        this.item = document.querySelector(`.content-card[data-tab="${this.data}"]`);
        this.contentCard = new ContentCard(this.item);

        this.element.addEventListener('click', () => {
            this.select();
        });
    }

    select() {
        const buttons = document.querySelectorAll('.button');
        buttons.forEach( button => {
            button.classList.remove('selected-button');
        });
        this.element.classList.add('selected-button');
        this.contentCard.select();
    }
}

class ContentCard {
    constructor(element) {
        this.element = element;
    }

    select() {
        const contentCards = document.querySelectorAll('.content-card');
        contentCards.forEach (contentCard => {
            contentCard.classList.remove('selected-card');
        });
        this.element.classList.add('selected-card');
    }
}

let buttons = document.querySelectorAll('.button-box .button').forEach(button => new Button(button));

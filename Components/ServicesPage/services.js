class TabLink {
    constructor(element) {
        this.element = element;
        this.tabData = this.element.dataset.tab;
        this.cards = document.querySelectorAll(`.card[data-tab=${this.tabData}`);
        this.cards = Array.from(this.cards).map((card) => new TabCard(card));
        this.element.addEventListener('click', () => this.selectTab());
    }

    selectTab() {
        const tabs = document.querySelectorAll('.tab');
        tabs.forEach((tab) => {
            tab.classList.remove('selected-tab')
        })
        this.element.classList.add('selected-tab');
        const cards = document.querySelectorAll('.card');
        cards.forEach((card) => {
            card.classList.remove('selected-card');
        })
        this.cards.forEach((card) => card.selectCard());
    }
}

class TabCard {
    constructor(element) {
        this.element = element;
    }
    selectCard() {
        this.element.classList.add('selected-card');
    }

}


let tabs = document.querySelectorAll('.tab');
tabs = Array.from(tabs).map((tab) => {
    return new TabLink(tab);
})
tabs[0].selectTab()
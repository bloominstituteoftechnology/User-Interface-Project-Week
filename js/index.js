// JS goes here
class TabLink {
    constructor(element){
        this.element = element;
        this.data = this.element.dataset.tab;
        this.cards = document.querySelector(`.card[data-tab = "${this.data}"]`);
        this.cards = Array.from(this.cards).map(card => new TabCard(card));
        this.element.addEventLestener("click", () => { this.selectTab()});
    }
    selectTab() {
        const tabs = document.querySelectorAll(".tab");
        tabs.forEach( tab => {
            tab.classList.remove("active-tab");
        });
        const cards = document.querySelectorAll(".card");
        cards.forEach(card => card.style.display = "none");
        this.cards.forEach(card => card.selectCard());
    }
}
class TabCard {
    constructor(element){
        this.element = element;
    }
    selectCard() {
        this.element.style.display = null;
    }
}
let tabs = document.querySelectorAll(".tab");
tabs = Array.from(tabs).map(tab => new TabLink(tab));
tabs[0].selectCard();
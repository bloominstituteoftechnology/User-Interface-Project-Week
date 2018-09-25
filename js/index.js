// JS goes here
class TabLink {
    constructor(element){
        this.element = element;
        this.tabData = this.element.dataset.tab; 
        this.cards = document.querySelectorAll(`.card[data-tab = '${this.tabData}']`);
        this.cards = Array.from(this.cards).map(element => new TabCard(element));
        this.element.addEventListener('click', () => {
        this.selectTab();
        });
    }

    selectTab(){
        const tabs = document.querySelectorAll('.tab');
        tabs.forEach(tabs => {
            tabs.classList.remove('active-tab')
        });
        this.element.classList.add('active-tab');
        const cards = document.querySelectorAll('.card');
        cards.forEach(cards => {
            cards.style.display = "none";
        });
        this.cards.forEach(card => card.selectCard());
    }
}

                                                // Cards
class TabCard {
    constructor(element){
        this.element = element;
    }
    selectCard(){
        this.element.style.display = null;
    }
}
let tabs = document.getElementsByClassName("tab");
tabs = Array.from(tabs).map(element => new TabLink(element));
tabs[0].selectTab();
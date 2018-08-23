// JS goes here

class TabLink {
    constructor(element){
        this.element = element;
        this.data = this.element.dataset.tab;
        console.log(this.data);
        this.card = document.querySelector(`.card[data-tab = "${this.data}"]`);
        this.card = new TabCard(this.card);
        this.element.addEventListener("click", () => { this.selectTab()});
    }
    selectTab() {
        const tabs = document.querySelectorAll(".tab");
        tabs.forEach( tab => {
            tab.classList.remove("active-tab");
        });
        const cards = document.querySelectorAll(".card");
        cards.forEach( card => {
            card.style.display = "none";
        });
        this.card.selectCard();
    }
}
class TabCard {
    constructor(element){
        this.element = element;
        this.element.style.display = "none";
    }
    selectCard() {
        this.element.style.display = null;
    }
}
let tabs = document.querySelectorAll(".tab");
tabs = Array.from(tabs).map(tab => new TabLink(tab));
tabs[0].selectTab();
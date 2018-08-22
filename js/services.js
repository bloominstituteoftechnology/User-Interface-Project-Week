class TabLink {
    constructor(element){
        this.element = element;
        this.data = this.element.dataset.tab;
        this.cards = document.querySelector(`.card[data-tab = "${this.data}"]`);
    }
}
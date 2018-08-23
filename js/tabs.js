// Tabs
class TabMenuItem {
    constructor(item) {
        this.item = item;
        this.data = this.item.dataset.tab;
        this.tabContainer = document.querySelector('.content-tabs');
        this.item.addEventListener('click', () => this.tabSelect());
        this.content = document.querySelector(`.tab-content[data-tab="${this.data}"]`);
    }

    tabSelect() {
        document.querySelectorAll(".tab").forEach(tabContent => tabContent.classList.remove("active"));
        this.item.classList.add("active");
        TweenMax.to(this.tabContainer, .25, {opacity: 0, ease:Sine.easeIn, onComplete: () => {
            document.querySelectorAll(".tab-content").forEach(tabContent => tabContent.classList.remove("active"));
            this.content.classList.add("active");
            TweenMax.to(this.tabContainer, .25, {opacity: 1, ease:Sine.easeOut});
        }});
    }
}

let tabs = document.querySelectorAll(".tab");
tabs = Array.from(tabs).map(tab => new TabMenuItem(tab));
tabs[0].tabSelect();
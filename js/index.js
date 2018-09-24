// JS goes here

class TabLink {
    constructor(link){
        this.link = link;
        this.data = this.link.dataset.tab;
        this.content = document.querySelector(`.tab[data-tab='${this.data}']`)

        this.link.addEventListener('click', e => this.tabClicked(e));
    }

    tabClicked(e) {
        document.querySelectorAll('.tab-link').forEach(n => {
            n.classList.remove('active-link');
        });
        document.querySelectorAll('.tab').forEach(n => {
            n.style.display = 'none';
        });
        this.link.classList.add('active-link')
        this.content.style.display = null;
    }
}

let tabLinks = document.querySelectorAll('.tab-links > .tab-link');

tabLinks = Array.from(tabLinks).map(n => new TabLink(n));

tabLinks[0].tabClicked();
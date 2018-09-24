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

if (tabLinks.length > 0){
    tabLinks = Array.from(tabLinks).map(n => new TabLink(n));
    tabLinks[0].tabClicked();
};



let navButton = document.querySelector('.hamburger');
let navBar = document.querySelector('.navigation');

navButton.addEventListener('click', e => {
    navBar.classList.toggle('show-nav');
    navButton.classList.toggle('fa-times');
})
const toggleNav = element => {
    nav.classList.toggle('expanded');
}

const nav = document.querySelector('.nav');
const navButton = document.querySelector('.nav-button');
navButton.addEventListener('click', () => {toggleNav();
});

//SERVICES PAGE TAB SELECTION

class TabLink {
    constructor(element) {
        this.element = element;
        this.links = document.querySelectorAll('.tab')
        this.links = Array.from(this.links).map((link) => {
            return new Link(link, this);
        })
        this.activeLink = this.links[0];
        this.init()
    }
        init() {
            this.activeLink.select()
        }
        updateActive(newActive) {
            this.activeLink.deselect()
            this.activeLink = newActive
        }
        getTab (data) {
           return this.element.querySelector(`.card[data-tab='${data}']`)
        }


}
class Link {
    constructor(link, parent) {
        this.element = link
        this.tabs = parent
        this.card = parent.getTab(this.element.dataset.tab)
        this.card = new TabsCard(this.card)
        this.element.addEventListener('click', () => {
            this.tabs.updateActive(this)
            this.select()
            console.log('yeah')
        })
        console.log(this.element)
    }
    select() {
        this.element.classList.add('.card')
        this.card.select()
    }
    deselect() {
        this.element.classList.add('.card')
        this.card.deselect()
    }
}
class TabsCard {
    constructor(tabCard) {
        this.element = tabCard
    }
    select() {
        this.element.classList.add('.card')
    }
    deselect() {
        this.element.classList.remove('.card')
    }
}

let tabs = document.querySelectorAll('.tabs');
tabs = Array.from(tabs).map(domElement => new TabLink(domElement));
console.log(tabs);
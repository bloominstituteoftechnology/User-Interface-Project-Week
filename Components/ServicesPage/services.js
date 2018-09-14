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

//mobile images
const cardImages = document.querySelectorAll('.card-img img');

function checkWidth() {
    if (window.innerWidth > 450) {
        cardImages[0].setAttribute('src', 'img/services/services-tab-pre-construction-img.png');
        cardImages[1].setAttribute('src', 'img/services/services-tab-construction-img.png');
        cardImages[2].setAttribute('src', 'img/services/services-tab-design-build-img.png');
        cardImages[3].setAttribute('src', 'img/services/services-tab-sustainability-img.png');
    } else if (window.innerWidth <= 450) {
        cardImages[0].setAttribute('src', 'img/services/services-tab-mobile-pre-construction-img.png');
        cardImages[1].setAttribute('src', 'img/services/services-tab-mobile-construction-img.png');
        cardImages[2].setAttribute('src', 'img/services/services-tab-mobile-design-build-img.png');
        cardImages[3].setAttribute('src', 'img/services/services-tab-mobile-sustainability-img.png');
    }
}

window.addEventListener('resize', checkWidth);

checkWidth();
tabs[0].selectTab()
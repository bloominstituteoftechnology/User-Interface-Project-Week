class ConnectedTab {
    constructor(tabElement) {
        this.tabElement = tabElement;
        this.data = this.tabElement.dataset.tab;
        this.cardElement = document.querySelector(`.detail-card[data-tab='${this.data}']`);
        this.tabCard = new TabCard(this.cardElement);

        this.tabElement.addEventListener('click', () => {
            this.selectTab();
        })
    }

    selectTab() {
        const tabs = document.querySelectorAll('.detail-tab');

        Array.from(tabs).forEach(tab => {
            tab.classList.remove('active-tab');
        });

        this.tabElement.classList.add('active-tab');
        this.tabCard.selectCard();
    }
}

class TabCard {
    constructor(element) {
        this.element = element;
    }

    selectCard() {
        const allCards = document.querySelectorAll('.detail-card');

        Array.from(allCards).forEach(card => {
            card.classList.remove('active-card');
        });

        this.element.classList.add('active-card');
    }
}


let allTabs = document.querySelectorAll('.detail-tab');

allTabs = Array.from(allTabs).map(tab => {
    return new ConnectedTab(tab);
});


let servicesJumbo = document.querySelector('.services-jumbo');
let preconstruction = document.querySelector('.preconstruction-img');
let  construction = document.querySelector('.construction-img');
let designBuild = document.querySelector('.design-build-img');
let sustainability = document.querySelector('.sustainability-img');

if (window.matchMedia('(max-width: 500px)').matches) {
    servicesJumbo.src = 'img/services/services-mobile-jumbotron.png';
    preconstruction.src = 'img/services/services-tab-mobile-pre-construction-img.png';
    construction.src = 'img/services/services-tab-mobile-construction-img.png';
    designBuild.src= 'img/services/services-tab-mobile-design-build-img.png';
    sustainability.src = 'img/services/services-tab-mobile-sustainability-img.png';
}
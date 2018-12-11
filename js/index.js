// JS goes here
// =================== TAB NAVIGATOR for services.html =========================
// classes up top as they are not hoisted by compiler
class Tab {
    constructor(tabElement) {
        // assign this.tabElement to the DOM reference 
        this.tabElement = tabElement;
        // grab the data-tab attribute from the html
        this.tabData = this.tabElement.dataset.tab;
        // select cards with matching data-tab value
        this.card = document.querySelector(`.card[data-tab="${this.tabData}"]`)
        // add event listener to the Tab to run selectTab method
        this.card = new TabCard(this.card);
        // console.log(this.card);
        this.tabElement.addEventListener('click', () => this.selectTab());

        
    }
    /// Methods
    selectTab() {
        // grab all tabs
        const tabs = document.querySelectorAll('.tab');
        // remove active tab class
        tabs.forEach(tab => tab.classList.remove('active-tab'));
        // grab all card elements
        const cards = document.querySelectorAll('.card');
        // set them all to not display
        cards.forEach(card => card.style.display = 'none');
        // add active tab class to clicked tab
        this.tabElement.classList.add('active-tab');
        // select card to display
        this.card.selectCard();
    }
}

class TabCard {
    constructor(cardElement) {
        // set this.cardelement to the card passed to the constructor
        this.cardElement = cardElement;
    }
    selectCard() {
        // display the card
        this.cardElement.style.display = 'flex';
    }
}

// grab all tabs to begin
let tabs = document.querySelectorAll('.tab').forEach(tab => new Tab(tab));

// ======================== NAVIGATION BAR =======================


let menuIcon = document.querySelector('.nav-img');
console.log(menuIcon);
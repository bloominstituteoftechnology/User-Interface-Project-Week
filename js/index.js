// JS goes here


//MENU
class Menu {
    constructor(openButton, closeButton, content) {
        this.openButton = openButton
        this.closeButton = closeButton
        this.menu = content

        this.openButton.addEventListener('click', () => {this.toggleMenu()});  //this.element? pass in argument?
        this.closeButton.addEventListener('click', () => {this.toggleMenu()});
    }
    toggleMenu () {
        //console.log('before', menu.classList)
        this.menu.classList.toggle('menu-overlay');
        this.closeButton.classList.toggle('menu-open');  //am i naming this or need to refer to something?  need this.?
        this.openButton.classList.toggle('hide');
        //console.log('after', menu.classList)
    }
}

    let menuOpenButton = document.querySelector('.menu-button');
    let menuCloseButton = document.querySelector('.close-button');
    let menuContent = document.querySelector('.menu-content');  
    let menu = new Menu(menuOpenButton, menuCloseButton, menuContent);


//TABS
class TabCard {
    constructor(element) {
    this.element = element;
    }
    selectCard() {
        this.element.style.display = 'flex';
    }
}

class TabLink {
    constructor(element) {
        console.log(element);
        this.element = element;
        this.tabData = this.element.dataset.tab;
        this.tabCards = document.querySelectorAll(`.tab-card`);
        this.cards = Array.from(this.tabCards).map(card => new TabCard(card));
        this.element.addEventListener('click', () => {this.selectTab()});
    }

    selectTab() {
        let tabs = document.querySelectorAll('.tab');  //can reuse tabs from below?
        tabs.forEach( tab => {
            tab.classList.remove('active-tab');
        })
        this.element.classList.add('active-tab');

        this.tabCards.forEach(card => card.style.display = 'none');
        this.cards.forEach(card => {
            if (card.element.dataset.tab === this.tabData) {
                card.selectCard()
            }
        });
    }
}


let tabs = document.querySelectorAll('.tab');
console.log(tabs);
tabs = Array.from(tabs).map( tab => new TabLink(tab));
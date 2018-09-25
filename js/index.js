// JS goes here


let hamburgerTag = document.querySelector('#hamburger');
let hamburgerCloseTag = document.querySelector('#hamburgerClose');
let navLinkTag = document.querySelector('.navLink');
let navTag = document.querySelector('.nav');


hamburgerTag.addEventListener('click', navClicked);
hamburgerCloseTag.addEventListener('click', navClicked);



function navClicked() {
    TweenMax.to('.nav', 3, {height : "100vh"});
    setTimeout(navClassToggle, 2000);
}

function navClassToggle() {
   
    hamburgerTag.classList.toggle('disappear');
    hamburgerCloseTag.classList.toggle('disappear');
    navLinkTag.classList.toggle('disappear');
    navTag.classList.toggle('expanded');  
}

class Tab {
    constructor(element) {
    this.element = element;
    this.dataset = element.dataset.tab;

    this.cardElement = document.querySelector(`.card[data-tab='${this.dataset}']`);
    // this.itemElement = document.querySelector(`.tabs-item[data-tab='${this.dataset}']`);

    this.card = new Card(this.cardElement);
   
    this.element.addEventListener('click', () => this.select());
    };

    select(){
        tabs.forEach((tab) => tab.element.classList.remove('activeTab'))
        this.element.classList.add('activeTab');
        this.card.select();
    }
}

class Card {
    constructor(element){
        this.element = element;
    }

    select(){
        let cards =  document.querySelectorAll('.card');
        Array.from(cards).forEach( (card)=> card.classList.remove('appear'));
      
        
        this.element.classList.add('appear');
    }
}

let tabs = document.querySelectorAll('.tab');
tabs = Array.from(tabs).map((tab) => new Tab(tab));

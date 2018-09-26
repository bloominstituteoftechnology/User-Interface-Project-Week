// JS goes here


let hamburgerTag = document.querySelector('#hamburger');
let hamburgerCloseTag = document.querySelector('#hamburgerClose');
let navLinkTag = document.querySelector('.navLink');
let navTag = document.querySelector('.nav');


hamburgerTag.addEventListener('click', navOpenClicked);
hamburgerCloseTag.addEventListener('click', navCloseClicked);



function navOpenClicked() {
    let tl = new TimelineLite;

    TweenLite.to('.nav', 1, {height : "100vh"});
    navClassToggle();
    
    tl.from('.navLink a:nth-child(1)', 1, {x :-600})
    .from('.navLink a:nth-child(2)', 1, {x :-600})
    .from('.navLink a:nth-child(3)', 1, {x :-600})
        
   
    // setTimeout(navClassToggle, 1000);
    // setTimeout((TweenLite.to('navLinkTag', 5, {opacity : "0.9"})),1000);
}

function navCloseClicked() {
    let tl = new TimelineLite;
    tl.to('.navLink a:nth-child(1)', 1, {x :-600})
    .to('.navLink a:nth-child(2)', 1, {x :-600})
    .to('.navLink a:nth-child(3)', 1, {x :-600})
    .to('.nav', 1, {height : "auto"});

    setTimeout( navClassToggle,4000);
    

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



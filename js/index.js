// JS goes here
const hamburger = document.querySelector('.menu__hamburger');
const menuExpanded = document.querySelector('.menu-expanded');
const hamburgerClose = document.querySelector('.menu__hamburger--close');

class TabLink{
    constructor(tab){
        this.tab = tab;
        this.tabNumber = this.tab.dataset.number;
        this.card = document.querySelector(`.card-main-content[data-number ='${this.tabNumber}']`);
        // console.log(this.card);     
        this.cardContent = new Card(this.card);
        // console.log(this.cardContent);
        this.tab.addEventListener('click',(e) => {
            e.preventDefault();
            this.select()});
    }
    select(){
        const tabs = document.querySelectorAll('.tablink');
        Array.from(tabs).forEach((tab) => {tab.classList.remove('tab-selected')});
        // console.log(tabs);
        this.tab.classList.add('tab-selected');
        this.cardContent.select();
    }
}
class Card {
    constructor(card){
        this.card = card;
        // console.log(this.card);
    }
    select(){
        const cardContents = document.querySelectorAll('.card-main-content');
        cardContents.forEach((cardContent) => {cardContent.classList.remove('card-selected')});
        this.card.classList.add('card-selected');
    }
}

hamburger.addEventListener('click', (e) => {
    menuExpanded.classList.add('menu-open');
    TweenMax.to(menuExpanded, .3, {opacity: 0.98 ,ease:Power4.easeOut});
});
hamburgerClose.addEventListener('click',(e) => {
    e.stopPropagation();
    TweenMax.to(menuExpanded, .3, {opacity: 0 ,ease:Power4.easeOut, onComplete: () => menuExpanded.classList.remove('menu-open')});
});


// services
let tabs = document.querySelectorAll('.tablink');
tabs = Array.from(tabs).map(tab => new TabLink(tab));

let title = document.title;
if(title === 'Services'){
    tabs[1].select();
}

//scroll

// const mainContent = document.querySelector('.main-content');
// mainContent.addEventListener('scroll',(e) => {
//     TweenMax.from(mainContent,2,{x:100, ease:Power2.easeOut});
// })

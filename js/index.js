// JS goes here

//menu
let hamburger = document.querySelector('.nav-button');
let unclicked = true;
let menuHeader = document.querySelector('.menu-header');
let menuButton = document.querySelector('.nav-button');
hamburger.addEventListener('click',()=>{
    document.querySelector('.menu-content').classList.toggle('menu--open');
    menuHeader.classList.toggle('menu-header--style');
    menuButton.classList.toggle('menu-button--style');
    document.querySelector('.anchors').classList.toggle('anchors--invis');
    if(unclicked){
        hamburger.setAttribute('src','./img/nav-hamburger-close.png');
        unclicked = false;
    }else{
        hamburger.setAttribute('src','./img/nav-hamburger.png');
        unclicked = true;
    }
});

// services-tabs
//grab tabs
let tabs = document.querySelectorAll('.tab');
//convert tabs Nodelist into Array of Tab objects
class Tab{
    constructor(element){
        this.element = element;
        this.tabData = this.element.dataset.tab;
        //give Tab object the Card associated with it
        this.card = document.querySelector(`.card[data-tab='${this.tabData}']`);
        //add click event so that the tab shows its information
        this.element.addEventListener('click', ()=>{
            //invis all other cards and show this tabs corresponding card
            let cards = document.querySelectorAll('.card');
            cards.forEach(card =>{
                card.classList.remove('show');
                card.classList.add('invis');
            });
            this.card.classList.add('show');
            this.card.classList.remove('invis');
            //remove selected from Tabs and give selected to this tab
            document.querySelectorAll('.tab').forEach(tab =>{
                tab.classList.remove('selected');
            });
            this.element.classList.add('selected');
        })
    }
}
class Card{
    constructor(element){
        this.element = element;
    }
}
tabs = Array.from(tabs).map(tab => new Tab(tab));
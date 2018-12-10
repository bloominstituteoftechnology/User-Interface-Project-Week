// JS goes here
// JS goes here

// Navigation Menu control

let hamburgerTag = document.querySelector('#hamburger');
let hamburgerCloseTag = document.querySelector('#hamburgerClose');
let navLinkTag = document.querySelector('.navLink');
let navTag = document.querySelector('.nav');


hamburgerTag.addEventListener('click', navOpenClicked);
hamburgerCloseTag.addEventListener('click', navCloseClicked);



function navOpenClicked() {
    let tl = new TimelineLite;

    navClassToggle();
   
   // expand the nav to whole screen
    TweenLite.to('.nav', 0.7, {height : "100vh"});
   
    // slideIn nav menu one at a time
    tl.fromTo('.navLink a:nth-child(1)', 0.5, {x :-600}, {x:0, opacity :1})
    .fromTo('.navLink a:nth-child(2)', 0.5, {x :-600}, {x:0, opacity :1})
    .fromTo('.navLink a:nth-child(3)', 0.5, {x :-600}, {x:0, opacity :1})
        
   
    // setTimeout(navClassToggle, 1000);
    // setTimeout((TweenLite.to('navLinkTag', 5, {opacity : "0.9"})),1000);
}

function navCloseClicked() {
    let tl = new TimelineLite;

    // nav menu faze out and nav area collapse to original size
    tl.to('.navLink a:nth-child(3)', 0.3, {opacity :0.1})
    .to('.navLink a:nth-child(2)', 0.3, {opacity :0.1})
    .to('.navLink a:nth-child(1)', 0.3, {opacity :0.1})
    .to('.nav', 0.5, {height : "8vh"});

    setTimeout( navClassToggle,1400);
    

 }

function navClassToggle() {
   
    hamburgerTag.classList.toggle('disappear');
    hamburgerCloseTag.classList.toggle('disappear');
    navLinkTag.classList.toggle('disappear');
    navTag.classList.toggle('expanded');  
}


// In service page, connect tab to right material (card) to be shown


class Tab {
    constructor(element) {
    this.element = element;
    this.dataset = element.dataset.tab;

    this.cardElement = document.querySelector(`.card[data-tab='${this.dataset}']`);
  
    this.card = new Card(this.cardElement);
   
    this.element.addEventListener('click', () => this.select("tab"));
    };

    select(method){
        tabs.forEach((tab) => tab.element.classList.remove('activeTab'))
        this.element.classList.add('activeTab');
        
        // this for loop keeps currentCard correct when tab is clicked
        for (let i =0 ; i < tabs.length; i++){
           if (tabs[i].element.classList.contains("activeTab"))
           carousel.currentCard = i;
       }
       
        // if it's carousel click, don't activate card.select
        if(method === "tab")
            this.card.select();
    }
}

class Card {
    constructor(element){
        this.element = element;
    }

    // display correct card when a tab is clicked
    select(){
        let cards =  document.querySelectorAll('.card');
     // move all cards left -100% so they won't be displayed
        Array.from(cards).forEach((card) => TweenLite.to(card, 0, {left:"-100%"}));
    
        // display correct card
        TweenLite.to(this.element, 0, {left:"5%"})
       
    }
}


// Carousel JS.  make cards rotate
class Carousel {
    constructor(element){
        this.element = element;
        this.currentCard = 0;
        this.cards = this.element.querySelectorAll('.card');
        this.maxCardNum = this.cards.length;
        this.cards[this.currentCard].style.left = "5%";
        this.initiate();
     }

     rightClicked() {
        let newNum = this.currentCard + 1;
        if (newNum == this.maxCardNum )
            newNum = 0; 
  
        // slide current card to right and slide new card in from left
        TweenLite.fromTo(this.cards[this.currentCard], 1.3,  {left :"5%"}, {left:"100%"} );
        TweenLite.fromTo(this.cards[newNum], 1.3, {left :"-100%"}, {left:"5%"} );
    
        this.currentCard = newNum;  

        tabs[this.currentCard].select();
      }

    leftClicked(){
        let newNum = this.currentCard - 1;
        if (newNum == -1 )
            newNum = this.maxCardNum - 1;
 
            this.cards[newNum].classList.remove('disappear')
            TweenLite.fromTo(this.cards[this.currentCard], 1.3,  {left :"5%"}, {left:"-100%"} );
            TweenLite.fromTo(this.cards[newNum], 1.3, {left :"100%"}, {left:"5%"} );
          
        this.currentCard = newNum;   
        tabs[this.currentCard].select();
      }

      initiate() {
            this.element.querySelector('.left-button').addEventListener('click', () => this.leftClicked());
            this.element.querySelector('.right-button').addEventListener('click', () => this.rightClicked());
        }
}


let carousel = document.querySelector('.cards-container');
carousel = new Carousel(carousel);



let tabs = document.querySelectorAll('.tab');
tabs = Array.from(tabs).map((tab) => new Tab(tab));
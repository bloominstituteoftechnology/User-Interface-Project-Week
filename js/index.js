class TabLink {
    constructor(tabElement){
        this.tabElement = tabElement;
        //get data-tab names:
        this.tabData = this.tabElement.dataset.tab;
        //use tabData to get the corresponding card:
        this.card = document.querySelector(`.card[data-tab ="${this.tabData}"]`)
        this.tabCard = new TabCard(this.card)
        this.tabElement.addEventListener("click", () => {this.selectTab()});
    };
    selectTab(){
        const tabs= document.querySelectorAll(".tab");
        //remove all current-tab classes from all tabs:
        tabs.forEach(tab => tab.classList.remove("current-tab"));
        //ad current-tab class to the tab you clicked on:
        this.tabElement.classList.add("current-tab");
        //invoke selectCard for each card
        this.tabCard.selectCard();
    }
}

class TabCard {
    constructor(cardElement){
        this.cardElement = cardElement;
    }
    selectCard(){
        const cards = document.querySelectorAll(".card");
        cards.forEach(card => card.classList.remove("current-card"));
        this.cardElement.classList.add("current-card")
        
    }
}
//iterate through each tab in in tab component to create a new tab element 
let tabs = document.querySelectorAll(".tab").forEach(tab => new TabLink(tab));
console.log(tabs);
console.log("hello")


//nav bar:
const navBar = document.querySelector(".nav-bar");
const fullNav = document.querySelector(".full-nav");
const hamburger = document.querySelector(".hamburger");
const close = document.querySelector(".close");
hamburger.addEventListener("click", function(e) {
    fullNav.classList.remove("hidden");
    navBar.classList.add("hidden");
})
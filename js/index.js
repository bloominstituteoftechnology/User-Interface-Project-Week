// JS goes here

class TabLink {
    constructor(element){
        this.element = element;
        this.data = this.element.dataset.tab;
        console.log(this.data);
        this.card = document.querySelector(`.card[data-tab = "${this.data}"]`);
        this.card = new TabCard(this.card);
        this.element.addEventListener("click", () => { this.selectTab()});
    }
    selectTab() {
        const tabs = document.querySelectorAll(".tab");
        tabs.forEach( tab => {
            // tab.classList.remove("active-tab");
            tab.className.replace(" active", "");
        });
        // let current = document.getElementsByClassName("active");
        // current[0].className = current[0].className.replace(" active", "");
        this.element.className += " active";
        const cards = document.querySelectorAll(".card");
        cards.forEach( card => {
            card.style.display = "none";
        });
        this.card.selectCard();
    }
}
class TabCard {
    constructor(element){
        this.element = element;
        this.element.style.display = "none";
    }
    selectCard() {
        this.element.style.display = null;
    }
}
let tabs = document.querySelectorAll(".tab");
tabs = Array.from(tabs).map(tab => new TabLink(tab));


const hamburger = document.querySelector('.hamburger');
const mainNav = document.querySelector('.main-nav');
let expanded = false;
const toggleMenu = () => {
    mainNav.classList.toggle('x-expand');
    if(expanded) {
        hamburger.src = "img/nav-hamburger.png";
    } else {
        hamburger.src = "img/nav-hamburger-close.png";

    }
    expanded = !expanded;
}
hamburger.addEventListener('click', toggleMenu);
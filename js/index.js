ScrollReveal().reveal('.jumbo');
ScrollReveal().reveal('.content');
ScrollReveal().reveal('.project')
ScrollReveal().reveal('footer');

const toggleNav = () => {
    nav.classList.toggle('menu-showing');
    if (nav.classList.contains('menu-showing')) {
        navButton.src = "./img/nav-hamburger-close.png";
        navContainer.style.paddingTop = '2.25%';
        navContainer.style.paddingBottom = '0';
    } else {
        navButton.src="./img/nav-hamburger.png";
        navContainer.style.paddingTop = '1.25%';
        navContainer.style.paddingBottom = '1.25%'; 
    }
}

const navButton = document.getElementById('nav-img');
const nav = document.querySelector('.main-nav');
const navContainer = document.querySelector('.nav-container');
navButton.addEventListener('click', toggleNav);

class Tab {
    constructor(element) {
        this.element = element;
        this.data = this.element.dataset.tab;
        this.card = document.querySelector(`.card[data-tab="${this.data}"]`);
        this.card = new Card(this.card);
        this.element.addEventListener('click', () => this.select())
    }
    select(){
        const tabs = document.querySelectorAll('.tab');
        tabs.forEach(item => item.classList.remove('tab-selected'));
        this.element.classList.add('tab-selected');
        this.card.select();
    }
}
class Card {
    constructor(element) {
        this.element = element;
    }
    select() {
        const cards = document.querySelectorAll('.card');
        cards.forEach(item => item.classList.remove('card-selected'));
        this.element.classList.add('card-selected');
    }
}
let tab = document.querySelectorAll('.tab');
tab = Array.from(tab).map(item => new Tab(item));
tab[1].select();

window.addEventListener('keypress', () => {
    if (event.key = 'Enter') {
        alert('Thank you! You should receive an email in your inbox shortly.')
    }
})



let title = document.querySelector('.nav-container h2');
console.log(title);
title.addEventListener('mouseover', () => {
    event.target.style.scale = '2';
})


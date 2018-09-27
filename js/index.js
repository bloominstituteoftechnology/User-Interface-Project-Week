// JS goes here

class TabLink {
    constructor(element) {
        this.element = element;
        this.dataNum = this.element.dataset.tab;
        this.card = document.querySelector(`.card[data-tab='${this.dataNum}']`);
        this.card = new TabContent(this.card);
        this.element.addEventListener('click', () => {
            this.selectLink();
            this.preventDefault;
        });
        
    }

    selectLink() {
        const links = document.querySelectorAll('.category');
        links.forEach(link => {
            link.classList.remove('active-link');
        });
        this.element.classList.add('active-link');

        const cards = document.querySelectorAll('.card');
        cards.forEach(card => card.style.display = 'none');

        this.card.selectContent();

      
        

    }
}

class TabContent {
    constructor(element) {
        this.element = element;
    }

    selectContent() {
        this.element.style.display = 'flex';
        
    }
}

let links = document.querySelectorAll('.category');

links = Array.from(links).map(link => new TabLink(link));





const burger = document.querySelector('#burger');
const close = document.querySelector('#close');
const modal = document.querySelector('.main-nav');

burger.addEventListener('click', () => {
    if (modal.style.display === 'none') {
        modal.style.display = 'flex';
        burger.src ='img/nav-hamburger-close.png';
    } else { 
        modal.style.display = 'none';
        burger.src ='img/nav-hamburger.png';
    }
    burger.preventDefault;
})

// burger.addEventListener('click', () => {
    
// })

close.addEventListener('click', () => {
    modal.style.display = 'none';
})

links[0].selectLink();



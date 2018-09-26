// JS goes here

class TabLink {
    constructor(element) {
        this.element = element;
        this.dataNum = this.element.dataset.tab;
        this.card = document.querySelector(`.card[data-tab='${this.dataNum}']`);
        this.card = new TabContent(this.card);
        this.element.addEventListener('click', () => {
            this.selectLink();
            this.preventDefault();
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

links[0].selectLink();

// btn1 = document.querySelector('.btn1');
// btn2 = document.querySelector('.btn2');
// btn3 = document.querySelector('.btn3');
// btn4 = document.querySelector('.btn4');


// btn1.addEventListener('click', () => links[0].selectLink());
// btn2.addEventListener('click', () => links[1].selectLink());
// btn3.addEventListener('click', () => links[2].selectLink());
// btn4.addEventListener('click', () => links[3].selectLink());

// NAV CONTENT


class Dropdown {
    constructor(element) {
      this.element = element;
      this.button = this.element.querySelector('.hamburger');
      this.content = this.element.querySelector('.nav');
      
      this.button.addEventListener('click', () => { this.toggleContent()})
    }
    toggleContent() {
      this.content.classList.toggle('dropdown-hidden');
    }
  }
  let dropdowns = document.querySelectorAll('.dropdown');
  dropdowns = Array.from(dropdowns).map( dropdown => new Dropdown(dropdown));


// END OF NAV CONTENT 





// TAB CONTENT 

class TabLink {
    constructor(link) {
        this.link = link;
        this.linkData = this.link.dataset.tab;

        if (this.linkData === '0') {
            this.cards = document.querySelector('.tab');
        } else {
            this.cards = document.querySelectorAll(`.tab[data-tab="${this.linkData}"]`);
        }
        this.cards = Array.from(this.cards).map(cards => new TabCard(cards));

        this.link.addEventListener('click', () => {
            this.selectCard()
        });
    }
    selectCard() {
        const link = document.querySelectorAll('.link')
        link.forEach(tab => {
            tab.classList.remove('active-link')
        });
        this.link.classList.add("active-link");

        const tab = document.querySelectorAll('.tab');
        tab.forEach(tab => {
            tab.style.display = "none"
        });
        this.cards.forEach(tab => tab.selectCard());

    }
}
class TabCard {
    constructor(tab) {
        this.tab = tab;
    }
    selectCard() {
        this.tab.style.display = "flex";
    }
}
let links = document.querySelectorAll('.link');
links = Array.from(links).map(link => new TabLink(link));

links[0].selectCard();

// END OF TAB CONTENT





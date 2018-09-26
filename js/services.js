// Services page tabs

class TabLink {
  constructor(link) {
    this.link = link;
    // dataset numbers 1 - 4
    this.linkData = this.link.dataset.tab;

    if (this.linkData === '0') {
      this.cards = document.querySelector('.content');
    } else {
      // content by dataset numbers
      this.cards = document.querySelectorAll(`.content[data-tab="${this.linkData}"]`);
    }

    this.cards = Array.from(this.cards).map(cards => new TabCard(cards));

    // event listener that calls method
    this.link.addEventListener('click', () => {
      event.stopPropagation();
      this.selectCard()
    });
    // create new content class
  } // methods go here
  selectCard() {
    //call content toggle method
    const link = document.querySelectorAll('.link')
    link.forEach(content => { content.classList.remove('active-link') });
    this.link.classList.add("active-link");

    const content = document.querySelectorAll('.content');
    content.forEach(content => { content.style.display = "none" });
    this.cards.forEach(content => content.selectCard());

  }
} // end of TabLink

class TabCard {
  constructor(content) {
    this.content = content;
  }
  selectCard() {
    this.content.style.display = "flex";
  }
}


let links = document.querySelectorAll('.link');
links = Array.from(links).map(link => new TabLink(link));

links[0].selectCard();
// end of services tab //
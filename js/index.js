// JS goes here

// Services page tabs

class TabLink {
  constructor(link) {
    this.link = link;
    // dataset numbers 1 - 4
    this.linkData = this.link.dataset.tab;
    // content by dataset numbers
    this.content = document.querySelector(`.content[data-tab="${this.linkData}"]`);
    // event listener that calls method
    this.link.addEventListener('click', (event) => {
      event.stopPropagation();
      this.linkClick(event)
    });
    // create new content class
    this.content = new Content(this.content);
  } // methods go here
  linkClick() {
    //call content toggle method
    this.content.toggleContent();
  }
} // end of TabLink

class Content {
  constructor(content) {
    this.content = content;
  }
  toggleContent() {
    this.content.classList.toggle('change');
  }
}




















let links = document.querySelectorAll('.link');
links = Array.from(links).map(link => new TabLink(link));
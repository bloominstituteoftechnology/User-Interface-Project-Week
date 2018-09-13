class ProjectLinks {
  constructor(element) {
    this.element = element;

    // get the cards data from the element
    this.linkData = element.dataset.cards;

    // find all elements with the project-card class
    this.projectCard = document.querySelectorAll('.project-card');

    // if linkData is all, select all else select only cards
    if (this.linkData === 'all') {
      this.cards = this.projectCard;
      console.log(this.cards);
    } else {
      this.cards = document.querySelectorAll(`.project-card[data-cards="${this.linkData}"]`);
      console.log(this.cards);
    }

    // use map to create a new instance of projectCard for all instances
    this.cards = Array.from(this.cards).map((card) => {
      return new ProjectCard(card);
    });

    // add an event listener that selects clicked tab
    this.element.addEventListener('click', () => {
      this.selectLink();
    });
  }

  selectLink() {

    // get all project link classes
    const projectLinks = document.querySelectorAll('.project-link');

    // use forEach to remove project link selected class
    projectLinks.forEach((link) => {

      // remove class: 'project-link-selected'
      link.classList.remove('project-link-selected');
    });

    // add class to active selected link
    this.element.classList.add('project-link-selected');

    // select all class: 'project-card'
    const cards = document.querySelectorAll('.project-card');

    // use forEach to set display of all of them to none
    cards.forEach((card) => {
      card.style.display = 'none';
    });
    // loop through this.cards and update display
    this.cards.forEach(card => card.selectCard());
  }
}

class ProjectCard {
  constructor(element){
    this.element = element;
  }
  selectCard() {
    // update style of this element
    this.element.style.display = 'flex';
  }
}
// create a nodeList of all project links
let links = document.querySelectorAll('.project-link');

// map over array and create new instances of ProjectLinks
links = Array.from(links).map((link) => {
  return new ProjectLinks(link);
})

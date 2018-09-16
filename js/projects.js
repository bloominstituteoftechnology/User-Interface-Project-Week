class ProjectLinks {
  constructor(element) {
    this.element = element;

    // get the cards data from the element
    this.linkData = element.dataset.cards;

    // find all elements with the project-card class
    this.projectCard = document.querySelectorAll('.project-card');

    // get all project popups
    const popups = document.querySelectorAll('.project-popup');

    // add an data-index to each project in the list
    this.popupIndex = Array.from(popups).map((project, index) => {
      project.setAttribute('data-index', index);
    });

    // add an data-index to each card and match it to a project
    this.index = Array.from(this.projectCard).map((card, index) => {
      card.setAttribute('data-index', index);
    });

    // if linkData is all, select all else select only cards
    if (this.linkData === 'all') {

      // set this.cards to all cards
      this.cards = this.projectCard;

    } else {
      this.cards = document.querySelectorAll(`.project-card[data-cards="${this.linkData}"]`);
    }

    // use map to create a new instance of projectCard for all instances
    this.cards = Array.from(this.cards).map((card, index) => {
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

    // get this elements button
    this.button = element.querySelector('.project-button');
    // get the data-index attribute
    this.data = this.element.dataset.index;

    // add an event listener to button
    this.button.addEventListener('click', () => {
      this.selectProject(element);
    });
  }
  selectCard() {
    // update style of this element
    TweenMax.fromTo(this.element,1, {opacity: 0, display: 'none'}, {opacity: 1, display: 'flex'})
  }
  selectProject(element) {

    // get index of current project card
    this.index = element.dataset.index;

    // get all of the project popups
    let popups = document.querySelectorAll('.project-popup');

    // transform into an array of popup Projects
    popups = Array.from(popups);

    // add a project class to each project
    popups.map((project) => {
      return new Projects(project);
    });

    // get the project to display
    popups[this.index].classList.remove('hidden');
    TweenMax.fromTo(popups[this.index],1,{opacity:0},{opacity:0.9})
  }
}

// create a projects class
class Projects {
  constructor(element) {
    this.element = element;

    // get the current elements close button
    this.close = this.element.querySelector('.closePopUp');

    // set an event listener that will add the hidden class back to element
    this.close.addEventListener('click', () => {
      element.classList.add('hidden');
    });
    // get the current project-img
    let projectImg = this.element.querySelector('.project-img');

    // get all thumbnails in current project
    let thumbnails = this.element.querySelectorAll('.thumbnail-img');
    thumbnails = Array.from(thumbnails).map((thumbnail) => {
      thumbnail.addEventListener('click', () => {
        projectImg.setAttribute('src', thumbnail.src);
      })
    })
  }
}


// create a nodeList of all project links
let links = document.querySelectorAll('.project-link');

// map over array and create new instances of ProjectLinks
links = Array.from(links).map((link) => {
  return new ProjectLinks(link);
})

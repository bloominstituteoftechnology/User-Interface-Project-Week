function ProjectCard(element, cardData) {
  this.element = element;

  this.component = document.createElement('div');
  this.component.classList.add('project-card');
  this.element.appendChild(this.component);

  // Banner
  this.banner = document.createElement('div');
  this.banner.classList.add('banner');
  this.banner.style.backgroundImage = `url(${cardData.imgSrc})`;
  this.component.appendChild(this.banner);



    // Banner label.
    this.label = document.createElement('div');
    this.label.classList.add('label');
    this.banner.appendChild(this.label);

      // Label text
      this.labelText = document.createElement('p');
      this.labelText.innerHTML = cardData.labelText;
      this.label.appendChild(this.labelText);

    if (cardData.labelSide === 'right') {
      this.label.classList.add('right');
    } else {
      this.label.classList.add('left');
    }

  // Text container.
  this.textContainer = document.createElement('div');
  this.textContainer.classList.add('text-container');
  this.component.appendChild(this.textContainer);


    // Text
    this.initText(cardData.text, this.textContainer);

}
ProjectCard.prototype.initText = function(arr, element) {
  arr.forEach(function(text) {
    const p = document.createElement('p');
    p.innerHTML = text;
    element.appendChild(p);
  });
}

export default ProjectCard;

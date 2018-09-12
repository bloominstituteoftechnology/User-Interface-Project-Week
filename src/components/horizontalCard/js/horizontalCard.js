function HorizontalCard(element, cardData) {
  this.element = element;

  this.component = document.createElement('div');
  this.component.classList.add('horizontal-card');
  this.element.appendChild(this.component);

  // Image
  this.image = document.createElement('img');
  this.image.classList.add('image');
  this.image.src = cardData.imgSrc;
  this.component.appendChild(this.image);

  // Container
  this.container = document.createElement('div');
  this.container.classList.add('container');
  this.component.appendChild(this.container);

    // Container heading
    this.heading = document.createElement('h2');
    this.heading.innerHTML = cardData.heading;
    this.container.appendChild(this.heading);

    // Container text
    this.text = document.createElement('p');
    this.text.innerHTML = cardData.text;
    this.container.appendChild(this.text);

    // Container button
    this.button = document.createElement('button');
    this.button.innerHTML = cardData.buttonText;
    this.container.appendChild(this.button);



  if (cardData.imgSide === 'right') {
    this.component.classList.add('right');
  } else {
    this.component.classList.add('left');
  }



}

export default HorizontalCard;

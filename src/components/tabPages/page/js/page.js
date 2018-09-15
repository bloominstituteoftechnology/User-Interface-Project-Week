function Page(element, label, textArr, imgSrc) {
  this.element = element;

  this.component = document.createElement('div');
  this.component.classList.add('page');
  this.element.appendChild(this.component);

  // Set active tab.
  if (Array.from(this.component.parentElement.children).length === 1) {
    this.component.classList.add('active');
  }

    // Label
    this.label = document.createElement('h2');
    this.label.innerHTML = `${label}`;
    this.component.appendChild(this.label);

    // Set page number.
    this.component.setAttribute('data-page', Array.from(document.querySelectorAll('[data-page]')).length);

    // Container
    this.container = document.createElement('div');
    this.container.classList.add('container');
    this.component.appendChild(this.container);

      // Text container.
      this.textContainer = document.createElement('div');
      this.textContainer.classList.add('text-container');
      this.container.appendChild(this.textContainer);

        // Text.
        this.initText(this.textContainer, textArr);

      // Image.
      this.image = document.createElement('img');
      this.image.src = imgSrc;
      this.container.appendChild(this.image);

}

Page.prototype.initText = function(ctr, arr) {

  arr.forEach(function(text) {

    const p = document.createElement('p');
    p.innerHTML = `${text}`;
    ctr.appendChild(p);
  });


}

export default Page;

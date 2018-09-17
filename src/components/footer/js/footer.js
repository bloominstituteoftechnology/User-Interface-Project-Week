function Footer(element) {
  this.element = element;

  // Footer
  this.component = document.createElement('footer');
  this.component.classList.add('footer');
  this.element.appendChild(this.component);

  // Top container
  this.topContainer = document.createElement('div');
  this.topContainer.classList.add('top-container');
  this.component.appendChild(this.topContainer);

  // Inner container left.
  this.containerLeft = document.createElement('div');
  this.containerLeft.classList.add('container-left');
  this.topContainer.appendChild(this.containerLeft);



    // left heading one
    this.leftHeadingOne = document.createElement('h3');
    this.leftHeadingOne.classList.add('footer-heading');
    this.leftHeadingOne.style.marginBottom = '4px';
    this.leftHeadingOne.innerHTML = "Interesed in starting a project?"
    this.containerLeft.appendChild(this.leftHeadingOne);

    // Left heading two
    this.leftHeadingTwo = document.createElement('h3');
    this.leftHeadingTwo.classList.add('footer-heading');
    this.leftHeadingTwo.innerHTML = "Let's talk:"
    this.containerLeft.appendChild(this.leftHeadingTwo);

    // Email input
    this.email = document.createElement('input');
    this.email.classList.add('footer-email');
    this.email.placeholder = "Email";
    this.containerLeft.appendChild(this.email);

    // Email notice
    this.emailNotice = document.createElement('p');
    this.emailNotice.classList.add('email-notice');
    this.emailNotice.innerHTML = "We'll never share your email with anyone else.";
    this.containerLeft.appendChild(this.emailNotice);

  // Inner contaier right.
  this.containerRight = document.createElement('div');
  this.containerRight.classList.add('container-right');
  this.topContainer.appendChild(this.containerRight);


    this.locationData = [{
      state: "New York",
      addOne: "123 Lane",
      addTwo: "Suite 100",
      city: "Albany, NY 12345",
      phone: "202 555 0144"
    }, {
      state: "FLorida",
      addOne: "Ocean Drive",
      addTwo: "Suite 201",
      city: "Orlando, FL 22345",
      phone: "502 555 0144"
    }, {
      state: "Califoria",
      addOne: "Mountain Street",
      addTwo: "Suite 105",
      city: "San Diego, CA 22345",
      phone: "702 555 0144"
    }];

    this.initLocation(this.locationData, this.topContainer);

  // Bottom container
  this.bottomContainer = document.createElement('div');
  this.bottomContainer.classList.add('bottom-container');
  this.component.appendChild(this.bottomContainer);

    // Copyright.
    this.copyright = document.createElement('p');
    this.copyright.classList.add('copyright');
    this.copyright.innerHTML = "Copyright &copy; 2018 Smith and Jones";
    this.bottomContainer.appendChild(this.copyright);

}
Footer.prototype.initLocation = function(arr, element) {
  arr.forEach(function(obj) {

    // Location container.
    const locationContainer = document.createElement('div');
    locationContainer.classList.add('location-container');
    element.appendChild(locationContainer);

    // Right container heading.
    const rightHeading = document.createElement('h3');
    rightHeading.style.marginBottom = '8px';
    rightHeading.innerHTML = obj.state;
    locationContainer.appendChild(rightHeading);

    // Location list.
    const list = document.createElement('ul');
    locationContainer.appendChild(list);

    // Add location list items.
    for (let prop in obj) {
      if (prop !== 'state') {
        const item = document.createElement('li');
        item.innerHTML = obj[prop];
        list.appendChild(item);
      }
    }

  });
}

export default Footer;

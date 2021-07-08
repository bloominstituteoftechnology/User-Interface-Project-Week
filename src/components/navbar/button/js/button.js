function Button(element, overlay, menu) {
  this.element = element;

  this.component = document.createElement('button');
  this.component.classList.add('button');
  this.element.appendChild(this.component);
  this.component.addEventListener('click', function() {
    this.classList.toggle('close');
    overlay.showOverlay();
    menu.classList.toggle('show');
  });


  for (let i = 0; i < 3; i++) this.component.appendChild(document.createElement('span'));
}

export default Button;

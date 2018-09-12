

function Overlay(element) {
  this.element = element;

  this.component = document.createElement('div');
  this.component.classList.add('overlay');
  this.element.appendChild(this.component);
  this.component.addEventListener('click', function() {
    // overlay.click(button, overlay, menu);
  });
}
Overlay.prototype.showOverlay = function() {
  this.component.classList.toggle('show');
}
Overlay.prototype.click = function(button, overlay, menu) {
  overlay.component.addEventListener('click', function() {
    button.component.classList.toggle('close');
    overlay.component.classList.toggle('show');
    menu.classList.toggle('show');
  });
}

export default Overlay;

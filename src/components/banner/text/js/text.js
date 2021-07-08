function Text(element, text) {
  this.element = element;
  this.text = text;

  this.component = document.createElement('span');
  this.component.classList.add('banner-text');
  this.component.innerHTML = `${this.text}`;
  this.element.appendChild(this.component);
}

Text.prototype.animate = function(delay) {
  const component = this.component;


  component.style.visibility = 'hidden';
  component.classList.add('animated');

  setTimeout(function(){
    component.style.visibility = 'visible';
    component.classList.add('zoomInRight');
    component.classList.add('fast');
  }, delay);

  //
}

export default Text;

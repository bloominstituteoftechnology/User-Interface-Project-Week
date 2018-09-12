function Link(element, obj) {
  this.element = element;
  this.obj = obj

  this.listItem = document.createElement('li');
  this.component = document.createElement('a');
  this.component.classList.add('link');
  this.listItem.appendChild(this.component);
  this.element.appendChild(this.listItem);
  this.component.innerHTML = this.obj.text;
  this.component.href = this.obj.href;

}

export default Link;

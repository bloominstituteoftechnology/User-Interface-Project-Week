// import '../less/jumbotron.less';
import Text from '../text/js/text.js';

function Jumbotron(element) {
  this.element = element;

  // Jumbotron container
  this.container = document.createElement('div');
  this.container.classList.add('jumbotron-ctr');
  this.element.appendChild(this.container);

  // Jumbotron component
  this.component = document.createElement('div');
  this.container.appendChild(this.component);
  this.component.classList.add('jumbotron');
  this.component.classList.add('animated');

  // Animate Jumbotron
  this.animate();

  this.setText(['Integrity,', 'Exellence,', 'Progress.']);
}

Jumbotron.prototype.animate = function() {
  const component = this.component;
  component.classList.add('animated');
  component.classList.add('fadeIn');
  // component.classList.add('fast');
}
Jumbotron.prototype.setText = function(textArr) {
  const textContainer = document.createElement('h1');
  textContainer.classList.add('text-container');
  this.component.appendChild(textContainer);

  let objArr = [];
  textArr.forEach(function(text){
    objArr.push(new Text(textContainer, text));

  });
  objArr[0].animate(300);
  objArr[1].animate(800);
  objArr[2].animate(1000);
}


export default Jumbotron;

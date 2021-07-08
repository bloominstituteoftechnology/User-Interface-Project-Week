import Text from '../text/js/text.js';

function Banner(element, data, Materialize) {
  this.element = element;

  this.component = document.createElement('div');
  this.component.classList.add('banner');
  this.component.style.backgroundImage = `url(${data.imgSrc})`;
  this.element.appendChild(this.component);

  // Animate banner
  this.animate();

  this.setText(data.text);
  }

  Banner.prototype.animate = function() {
  const component = this.component;
  component.classList.add('animated');
  component.classList.add('fadeIn');
  // component.classList.add('fast');
  }


  Banner.prototype.setText = function(textArr) {
  const textContainer = document.createElement('h1');
  textContainer.classList.add('text-container');
  this.component.appendChild(textContainer);

  let objArr = [];
  textArr.forEach(function(text){
    objArr.push(new Text(textContainer, text));

  });
  objArr[0].animate(300);
  // objArr[1].animate(800);
  // objArr[2].animate(1000);
  }

export default Banner;

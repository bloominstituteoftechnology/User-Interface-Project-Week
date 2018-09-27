{
class Overlay{
    constructor(element) {
      this.element = element;

      this.button = this.element.querySelector('.burger');
      
      this.content = this.element.querySelector('.expanded')

      this.button.addEventListener('click', () => {this.toggleContent(event)});
    }
  
    toggleContent() {

      this.content.classList.toggle('hide');
    }
}

  let navs = document.querySelectorAll('.navigation');
  console.log(navs);
  navs = Array.from(navs).map(nav => new Overlay(nav));
}
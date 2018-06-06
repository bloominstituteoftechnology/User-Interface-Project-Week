class Dropdown {
  constructor(element) {
    this.element = element;
    this.button = this.element.querySelector('.hamburger');
    this.content = this.element.querySelector('.ham-content');
    this.button.addEventListener('click', () => {
      this.toggleContent();
    });
  }

  toggleContent() {
    this.content.classList.toggle('ham-hidden');
    // console.log('marvel');
  }
}
document.querySelector('.hamburger').addEventListener('click', () => {
  console.log('click');
});
//let dropdowns = document.querySelectorAll('.hamburger');
//console.log(dropdowns);
//console.log(document.querySelector('.hamburger'));
//dropdowns = Array.from(dropdowns).map((dropdown) => new Dropdown(dropdown));

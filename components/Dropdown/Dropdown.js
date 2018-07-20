class Dropdown {
  constructor(element) {
    this.element = element;
    this.button = this.element.querySelector(".dropdown-button");
    this.content = this.element.querySelector(".dropdown-content");
    this.button.addEventListener("click", this.toggleContent.bind(this));
  }

  toggleContent() {
    let isVisible = this.content.classList.toggle("dropdown-show");
    isVisible
      ? (this.button.src = "img/nav-hamburger-close.png")
      : (this.button.src = "img/nav-hamburger.png");
  }
}

let dropdowns = document.querySelectorAll(".dropdown");
dropdowns = Array.from(dropdowns).map(dropdown => new Dropdown(dropdown));

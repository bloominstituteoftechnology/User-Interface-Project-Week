class Dropdown {
  constructor(element) {
    this.element = element;

    this.buttonOpen = this.element.querySelector(".hamburger");
    this.buttonClose = this.element.querySelector(".close");

    this.content = this.element.querySelector(".nav-links");

    this.buttonOpen.addEventListener("click", () => {
      this.openContent();
    });
    this.buttonClose.addEventListener("click", () => {
      this.closeContent();
    });
  }

  openContent() {
    this.buttonOpen.style.display = "none";
    this.buttonClose.style.display = "block";
    this.content.classList.add("nav-showing");
  }

  closeContent() {
    this.buttonOpen.style.display = "block";
    this.buttonClose.style.display = "none";
    this.content.classList.remove("nav-showing");
  }
}

let navDropdown = document.querySelector(".navbar");
navDropDown = new Dropdown(navDropdown);

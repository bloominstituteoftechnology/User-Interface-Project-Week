// JS goes here
class HamburgerOpen {
  constructor(element) {
    this.element = element;
    this.element.addEventListener("click", () => this.openModal());
  }
  openModal() {
    document.querySelector(".non-expanded").classList.add("modal-hidden");
    document.querySelector(".expanded").classList.remove("modal-hidden");
    document.querySelector(".expanded").classList.remove("modal-hidden");
    document.querySelector(".menu-modal").classList.remove("modal-hidden");
  }
}
class HamburgerClose {
  constructor(element) {
    this.element = element;
    this.element.addEventListener("click", () => this.closeModal());
  }
  closeModal() {
    document.querySelector(".non-expanded").classList.remove("modal-hidden");
    document.querySelector(".expanded").classList.add("modal-hidden");
    document.querySelector(".expanded").classList.add("modal-hidden");
    document.querySelector(".menu-modal").classList.add("modal-hidden");
  }
}
let hamburgerNonExpanded = document.querySelector("header .non-expanded");
let hamburgerExpanded = document.querySelector("header .expanded");
hamburgerNonExpanded = new HamburgerOpen(hamburgerNonExpanded);
hamburgerExpanded = new HamburgerClose(hamburgerExpanded);

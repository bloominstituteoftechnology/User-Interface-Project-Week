class Dropdown {
    constructor(el) {
        this.element = el;
        this.button = el.querySelector(".dropdown-button");
        this.content = el.querySelector(".dropdown-content");
        this.el.addEventListener("click", () => this.toggleContent());
    }
    toggleContent() {
        this.content.classList.toggle("dropdown-hidden");
    }
}
let dropdowns = document.querySelectorAll(".dropdown").forEach(dropdown => new Dropdown(dropdown));
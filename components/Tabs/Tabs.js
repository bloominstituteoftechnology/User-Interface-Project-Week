class TabLink {
  constructor(element) {
    this.element = element;
    this.data = this.element.dataset.tab;
    this.itemElement = document.querySelector(
      `.services__box[data-tab="${this.data}"]`
    );
    this.itemElement = new TabItem(this.itemElement);
    this.element.addEventListener("click", () => this.select());
  }

  select() {
    const tabs = document
      .querySelectorAll(".tab")
      .forEach(link => link.classList.remove("tab--selected"));
    this.element.classList.add("tab--selected");
    this.itemElement.select();
  }
}

class TabItem {
  constructor(element) {
    this.element = element;
  }

  select() {
    const items = document
      .querySelectorAll(".services__box")
      .forEach(item => item.classList.remove("services__box--view"));
    this.element.classList.add("services__box--view");
  }
}

const tabs = document
  .querySelectorAll(".tab")
  .forEach(link => new TabLink(link));

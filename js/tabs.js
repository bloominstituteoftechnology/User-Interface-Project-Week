class Tabs {
  constructor(element) {
    this.element = element;
    this.data = this.element.dataset.tab;
    this.matchingContent = document.querySelector(
      `.tab-box[data-tab="${this.data}"]`
    );
    this.tabBox = new TabBox(this.matchingContent);
    this.element.addEventListener("click", () => this.select());
  }

  select() {
    const tabs = document.querySelectorAll(".tab");
    Array.from(tabs).forEach(tab => tab.classList.remove("tab-selected"));
    this.element.classList.add("tab-selected");
    this.tabBox.select();
  }
}

class TabBox {
  constructor(element) {
    this.element = element;
  }

  select() {
    const items = document.querySelectorAll(".tab-box");
    Array.from(items).forEach(item =>
      item.classList.remove("tab-box-selected")
    );
    this.element.classList.add("tab-box-selected");
  }
}

let tabs = document.querySelectorAll(".tab");

tabs = Array.from(tabs).map(tabLink => new Tabs(tabLink));

tabs[0].select();
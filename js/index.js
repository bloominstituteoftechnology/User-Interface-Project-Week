// Tab Button Navigator Code
class TabButton {
  constructor(element) {
    this.element = element;
    this.data = this.element.dataset.tab;
    this.item = document.querySelector(`.tab-item[data-tab="${this.data}"]`);
    this.tabItem = new TabItem(this.item);
    this.element.addEventListener("click", () => {
      this.select();
    });
  }

  select() {
    const buttons = document.querySelectorAll(".tab-btn");

    // loop through all buttons and remove selected status
    buttons.forEach(button => {
      button.classList.remove("tab-btn-selected");
    });

    // apply selected status to button clicked on
    this.element.classList.add("tab-btn-selected");

    this.tabItem.select();
  }
}

class TabItem {
  constructor(element) {
    this.element = element;
  }

  select() {
    const items = document.querySelectorAll(".tab-item");

    // loop through all content and remove selected status from each
    items.forEach(item => {
      item.classList.remove("tab-item-selected");
    });

    // apply selected status to content corresponding to button
    this.element.classList.add("tab-item-selected");
  }
}

let buttons = document.querySelectorAll(".tab-btn")
                      .forEach(button => new TabButton(button));
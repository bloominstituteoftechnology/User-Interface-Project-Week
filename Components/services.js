class Button {
  constructor(element) {
    this.element = element;

    this.data = this.element.dataset.tab;

    this.itemElement = document.querySelector(
      `.tab-content[data-tab='${this.data}']`
    );

    this.tabItem = new TabItem(this.itemElement);

    this.element.addEventListener('click', () => {
      this.select();
    });
  }

  select() {
    const buttons = document.querySelectorAll('.btn');
    console.log(buttons);

    Array.from(buttons).forEach(button => {
      button.classList.remove('btn-selected');
    });

    this.element.classList.add('btn-selected');

    this.tabItem.select();
  }
}

class TabItem {
  constructor(element) {
    this.itemElement = element;
  }

  select() {
    const items = document.querySelectorAll('.tab-content');

    items.forEach(item => {
      item.classList.remove('tab-content-selected');
    });

    this.itemElement.classList.add('tab-content-selected');
  }
}

let buttons = document.querySelectorAll('.btn');

buttons = Array.from(buttons).map(button => new Button(button));

buttons[0].select();

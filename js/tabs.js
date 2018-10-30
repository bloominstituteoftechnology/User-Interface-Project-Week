// tab.js - Tab component

class TabNavigator {

  constructor(element) {

    let tabs = element.querySelectorAll('.tab');

    tabs = Array.from(tabs).map(tab => new Tab(tab));

    let selectedTab = tabs[0];
    tabs[0].select();

    tabs.forEach(tab => {

      tab.element.addEventListener('click', () => {

        selectedTab.deselect();
        tab.select();
        selectedTab = tab;

      });

    })

  }

}

class Tab {

  constructor(element) {

    this.element = element;
    this.id = element.dataset.tab;
    this.content = document.querySelector(`.tab-content[data-tab='${this.id}']`)

  }

  deselect() {

    this.element.classList.remove('selected');
    this.content.style.display = "none";

  }

  select() {

    this.element.classList.add('selected');
    this.content.style.display = "flex";

  }

}

let navigator = new TabNavigator(document.querySelector('.tabs'));

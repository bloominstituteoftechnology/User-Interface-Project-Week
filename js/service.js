//Service tabs

class Tab {
  constructor(element) {
    this.element = element;
    this.data = this.element.dataset.tab;

    this.tabElement = document.querySelector(`.tab[data-tab="${this.data}"]`);
    this.tabContent = new TabContent(this.tabElement);

    this.element.addEventListener('click', () => { this.clickTab() });
  }
  clickTab() {
    const tabs = document.querySelectorAll(".btn");

    tabs.forEach(tab => {
      tab.classList.remove("select");
    });

    this.element.classList.add("select");

    this.tabContent.activate();
  }
}

class TabContent {
  constructor(element) {
    this.element = element;
    console.log(this.element)
  }
  activate() {
    const contents = document.querySelectorAll(".tab");

    contents.forEach(content => {
      content.classList.remove("active");
    });
    
    this.element.classList.add("active");
  }
}


let tabs = document.querySelectorAll(".btn");

tabs = Array.from(tabs).map(tab => new Tab(tab));

tabs[0].clickTab();

//Service tabs end
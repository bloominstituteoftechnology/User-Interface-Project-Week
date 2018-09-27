class Tabs {
  constructor(element){
    this.element = element;
    this.tabData = element.dataset.tab;
    this.tabContent = document.querySelector(`.tab-content[data-tab='${this.tabData}']`);
    this.tabContent = new TabContent(this.tabContent);
    this.element.addEventListener('click', () => {
      this.select();
    })
  }
  select() {
    const tabs = document.querySelectorAll('.tab');
    Array.from(tabs).forEach(tab =>
    tab.classList.remove('active-tab'));
    this.element.classList.add('active-tab');
    this.tabContent.select();
  }
};

class TabContent {
  constructor(element) {
    this.element = element;
  }
  select() {
    const allContent = document.querySelectorAll('.tab-content');
    Array.from(allContent).forEach(item =>{
      item.classList.remove('active-content');
      item.classList.remove('animated');
      item.classList.remove('bounceInUp');
    }
    );

    this.element.classList.add('active-content');
    this.element.classList.add('animated');
    this.element.classList.add('bounceInUp');

  }
}

let tabs = document.querySelectorAll('.tab');

tabs = Array.from(tabs).map(tab =>
new Tabs(tab));

tabs[0].select();

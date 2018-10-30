class TabLink {
    constructor(element) {
      this.element = element;
      this.data = this.element.dataset.tab;
      this.itemElement = document.querySelector(`.tabs-item[data-item='${this.data}']`);
      this.tabItem = new TabItem(this.itemElement);
      this.element.addEventListener('click', () => this.select());
  
    };
  
    select() {
      const links = document.querySelectorAll(".tabable");
      Array.from(links).forEach((item) => item.classList.remove("tabs-link-selected"));
      this.element.classList.add("tabs-link-selected");
      this.tabItem.select();
    }
  }
  
  class TabItem {
    constructor(element) {
      this.element = element;
    }
  
    select() {
      const content = document.querySelectorAll(".tabs-item")
      Array.from(content).forEach((item) => item.classList.remove("tabs-item-selected"));
      this.element.classList.add("tabs-item-selected");
    }
  }

  let links = document.querySelectorAll(".tabable");
  links = Array.from(links).map( links => new TabLink(links));
  links[0].select();
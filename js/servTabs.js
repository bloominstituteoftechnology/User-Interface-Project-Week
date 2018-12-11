class Tabz {
    constructor(element) {
      this.element = element;
      this.data = this.element.dataset.tab;
      this.tabItem = document.querySelector(`.tabsItem[data-tab="${this.data}"]`);
      this.tabItem = new TabzI(this.tabItem);
  

      this.element.addEventListener("click", () => this.select());
    }

    select() {
      const li = document.querySelectorAll(".tabsLink");
      li.forEach(li => li.classList.remove("tabsLink-selected"));
     
      this.element.classList.add("tabsLink-selected");
      this.tabItem.select();
    }
  }
  
  class TabzI {
    constructor(element) {
      this.element = element;
    }
    select() {
      const items = document.querySelectorAll(".tabsItem");
      items.forEach(item => item.classList.remove("tabsItem-selected"));
      this.element.classList.add("tabsItem-selected");
    }
  }
  
  let tabslink = document.querySelectorAll(".tabsLink").forEach(hold => new Tabz(hold));
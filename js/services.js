class Row {
    constructor(element) {
      this.element = element;
      this.links = this.element.querySelectorAll(".tabs-link");
      this.links = Array.from(this.links).map( link => {
        return new TabsLink(link, this);
      });
      this.activeLink = this.links[0];
      this.init();
    }
     init() {
      this.activeLink.select();
      console.log("init working");
    }
     updateActive(newActive) {
      this.activeLink.deselect();
      this.activeLink = newActive;
    }
     getTab(data) {
      return this.element.querySelector(`.tabs-item[data-tab="${data}"]`);
    }
   }
   class TabsLink {
    constructor(element, parent) {
      this.element = element;
      this.row = parent;
      this.tabsItem = parent.getTab(this.element.dataset.tab);
      this.tabsItem = new TabsItem(this.tabsItem);
      this.element.addEventListener('click', () => {
        this.row.updateActive(this);
        this.select();
      });
    };
     select() {
      this.element.classList.add("tabs-item-selected");
      this.tabsItem.select();
    }
     deselect() {
     this.element.classList.remove("tabs-item-selected");
      this.tabsItem.deselect();
    }
  }
  class TabsItem {
    constructor(element) {
      this.element = element;
    }
     select() {
      this.element.classList.add("tabs-item-selected");
    }
     deselect() {
      this.element.classList.remove("tabs-item-selected");
    }
  }
  
  let row = document.querySelectorAll(".row");
  row = Array.from(row).map( tab => new Row(tab));
 
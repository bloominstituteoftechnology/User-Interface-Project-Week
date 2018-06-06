

class Btnns {
    constructor(element) {
      this.element = element;
      this.links = this.element.querySelectorAll('.btns-link');
      this.links = Array.from(this.links).map(link => {
        return new BtnsLink(link, this);
      });
      this.activeLink = this.links[0];
      this.init();
    }
  
    init() {
      this.activeLink.select()
    }
  
    updateActive(newActive) {
      this.activeLink.deselect();
      this.activeLink = newActive;
    }
  
    getBtn(data) {
      return this.element.querySelector(`.btns-item[data-btn="${data}"]`)
    }
  
  }
  
  class BtnsLink {
    constructor(element, parent) {
      this.element = element;
      this.btns = parent;
      this.btnsItem = parent.getBtn(this.element.dataset.btn);
      this.btnsItem = new BtnsItem(this.tabsItem);
      this.element.addEventListener('click', () => {
        this.btns.updateActive(this);
        this.select()
      });
    };
  
    select() {
      this.element.classList.add('btns-link-selected')
      this.btnsItem.select();
    }
  
    deselect() {
      this.element.classList.remove('btns-link-selected');
      this.btnsItem.deselect();
    }
  }
  
  class BtnsItem {
    constructor(element) {
      this.element = element;
    }
  
    select() {
      this.element.classList.add('btns-item-selected');
    }
  
    deselect() {
      this.element.classList.remove('btns-item-selected');
    }
  }
  
  
  let btns = document.querySelectorAll('.btns');
  btns = Array.from(btns).map( tab => new Tabs(btn));
class Tab {
  constructor(element){
    this.element = element;
    this.tabBtns = this.element.querySelectorAll('.tab');
    this.tabBtns = Array.from(this.tabBtns).map(btn => new TabBtn(btn, this));

    this.activeBtn = this.tabBtns[0];
    this.activeBtn.selectBtn();
  }

  updateActive(btn){
    this.activeBtn.deselectBtn();
    this.activeBtn = btn;
  }
}

class TabBtn{
  constructor(element, parent){
    this.element = element;
    this.parent = parent;
    this.data = this.element.dataset.tab;
    this.content = document.querySelector(`.tab-content[data-tab="${this.data}"]`);

    this.element.addEventListener('click', this.selectBtn.bind(this));
  }

  selectBtn(){
    this.parent.updateActive(this);
    this.element.classList.add('active-tab');
    this.content.classList.add('active-content');
  }

  deselectBtn(){
    this.element.classList.remove('active-tab');
    this.content.classList.remove('active-content');
  }
}

let tabs = document.querySelectorAll('.tabs');
tabs = Array.from(tabs).map(tab => new Tab(tab));

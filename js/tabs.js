class TabButton {
    constructor(element) {
      this.element = element;
      this.data = this.element.dataset.tab;
      this.tab = document.querySelector(`.tab-nav-content[data-tab='${this.data}']`);
      
      this.element.addEventListener('click', () => {
        this.select(event);
      });
  
      this.tab = new TabInfo(this.tab);
    }
  
   select() {
      const tabs = document.querySelectorAll('.tab');
  
     Array.from(tabs).forEach(tab => {
        tab.classList.remove('active');
      });
  
      this.element.classList.add('active');

      this.tab.select();
    }

  }
  
  class TabInfo {
    constructor(element) {
      this.element = element;
    }
  
    select() {
      const contents = document.querySelectorAll('.tab-nav-content');
  
      Array.from(contents).forEach(content => {
        content.classList.add('hide');
      });

      this.element.classList.remove('hide');
    }
  }
  
  let buttons = document.querySelectorAll('.tab');
  
  buttons = Array.from(buttons).map(button =>  new TabButton(button));
  
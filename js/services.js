document.addEventListener("DOMContentLoaded", function(event) {
  class TabLink {
      constructor(element) {
        this.element = element;
        this.data = this.element.dataset.num;
        this.itemElement = document.querySelector(`.tabs-btn[data-num="${this.data}"]`);
        this.tabItem = new TabItem (this.itemElement);
        this.itemImg = document.querySelector(`.tc-img[data-num="${this.data}"]`);
        this.tabImg = new TabImg(this.itemImg);
        this.element.addEventListener('click', () => {
          this.select();
        })
    
      };
    
      select() {
        const links = document.querySelectorAll('.tabs-btn');
        Array.from(links).forEach((link) => {
          link.classList.remove('selected-btn');
        });
    
        this.element.classList.toggle('selected-btn');
        this.tabItem.select();
        this.tabImg.select();
      }
    }
    
    class TabItem  {
      constructor(element) {
        this.element = element;
      }
    
      select() {
        const items = document.querySelectorAll('.tc-text-title');
        Array.from(items).forEach((item) => {
          item.classList.remove('tc-title-selected');
        });
        this.element.classList.toggle('tc-title-selected');
      }
    }

    class TabImg {
      constructor(element) {
        this.element = element;
      }
    
      select() {
        const items = document.querySelectorAll('.tc-img');
        Array.from(items).forEach((item) => {
          item.classList.remove('tc-img-selected');
        });
        this.element.classList.toggle('tc-img-selected');
      }
    }
    
    
    let links = document.querySelectorAll('.tabs-btn');
    links = Array.from(links).map((link) => new TabLink(link));
    links[0].select();
})
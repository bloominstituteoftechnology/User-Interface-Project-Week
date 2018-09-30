document.addEventListener("DOMContentLoaded", function(event) {
    class TabLink {
        constructor(element) {
          this.element = element;
          this.data = this.element.dataset.number;
          this.itemElement = document.querySelector(`.tc-text-title[data-number="${this.data}"]`);
          this.tabItem = new TabElement (this.itemElement);
          this.itemImg = document.querySelector(`.tc-img[data-number="${this.data}"]`);
          this.tabImg = new TabImage(this.itemImg);
          this.element.addEventListener('click', () => {
            this.select();
          })
      
        };
      
        select() {
          const links = document.querySelectorAll('.tabs-btn');
          Array.from(links).forEach((link) => {
            link.classList.remove('selected-tab');
          });
      
          this.element.classList.toggle('selected-tab');
          this.tabItem.select();
          this.tabImg.select();
        }
      }
      
      class TabElement {
        constructor(element) {
          this.element = element;
        }
      
        select() {
          const items = document.querySelectorAll('.tc-text-title');
          Array.from(items).forEach((item) => {
            item.classList.remove('tc-title-selected');
          });
          this.element.classList.toggle("tc-title-selected");
        }
      }

      class TabImage {
        constructor(element) {
          this.element = element;
        }
      
        select() {
          const items = document.querySelectorAll('.tc-img');
          Array.from(items).forEach((item) => {
            item.classList.remove('tc-img-selected');
          });
          this.element.classList.toggle("tc-img-selected");
        }
      }
      
      
      let links = document.querySelectorAll('.tabs-btn');
      links = Array.from(links).map((link) => new TabLink(link));
      links[0].select();
})
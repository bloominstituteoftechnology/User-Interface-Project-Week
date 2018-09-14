document.addEventListener("DOMContentLoaded", function(event) {
    class TabLink {
        constructor(element) {
          this.element = element;
          this.data = this.element.dataset.number;
          this.itemElement = document.querySelector(`.tab-content__title[data-number="${this.data}"]`);
          this.tabItem = new TabItem(this.itemElement);
          this.itemImg = document.querySelector(`.tab-content__image[data-number="${this.data}"]`);
          this.tabImg = new TabImg(this.itemImg);
          this.element.addEventListener('click', () => {
            this.select();
          })
      
        };
      
        select() {
          const links = document.querySelectorAll('.tabs__button');
          Array.from(links).forEach((link) => {
            link.classList.remove('tabs__button--selected');
          });
      
          this.element.classList.toggle('tabs__button--selected');
          this.tabItem.select();
          this.tabImg.select();
        }
      }
      
      class TabItem {
        constructor(element) {
          this.element = element;
        }
      
        select() {
          const items = document.querySelectorAll('.tab-content__title');
          Array.from(items).forEach((item) => {
            item.classList.remove('tab-content__title-selected');
          });
          this.element.classList.toggle("tab-content__title-selected");
        }
      }

      class TabImg {
        constructor(element) {
          this.element = element;
        }
      
        select() {
          const items = document.querySelectorAll('.tab-content__image');
          Array.from(items).forEach((item) => {
            item.classList.remove('tab-content__image-selected');
          });
          this.element.classList.toggle("tab-content__image-selected");
        }
      }
      
      
      let links = document.querySelectorAll('.tabs__button');
      links = Array.from(links).map((link) => new TabLink(link));
      links[0].select();
})
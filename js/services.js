// //SERVICES TABS
class TabLink {
    constructor(element) {
       this.element = element;
       this.data = this.element.dataset.tab;
       this.itemElement = document.querySelectorAll(`.content[data-tab = "${this.data}"]`);
       this.tabItem = new TabItem(this.itemElement);
       this.element.addEventListener('click', () => {
           this.select()});
    };
        


    
    select() {
        const links = document.querySelectorAll('.tab');
      Array.from(links).forEach((el) => {
          el.classList.remove("tab-selected");
      });
      this.element.classList.add("tab-selected");
      this.tabItem.select();
    };
}

class TabItem {
    constructor(element) {
        this.element = element;
    };

    select() {
        const items = document.querySelectorAll('.content');
        Array.from(items).forEach((el) => {
           el.classList.remove("content-selected");
       });

       this.element.classList.add('content-selected');
    };
}

let links = document.querySelectorAll('.tab');
link = Array.from(links).map((el) => {
    return new TabLink(el);
});

links[0].select();




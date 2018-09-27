let nav = document.querySelector(".navImg")
let bar = document.querySelector(".top-bar")
let expanded = document.querySelector(".expanded")
nav.addEventListener("click", (event) => {
    bar.classList.toggle("drop");
    expanded.classList.toggle("open")
    nav.classList.toggle("x")
})

// Custom Tab

class TabLink {
    constructor(element) {
        this.element = element;
        this.data = this.element.dataset.tab;
        this.items = document.querySelectorAll(`.h[data-tab="${this.data}"]`);
        this.tabItems = Array.from(this.items).map (item => new TabItem(item));
        this.element.addEventListener('click', () => {
            this.select();
        });

    };

    select() {
        const links = document.querySelectorAll('.tabLink')
        links.forEach( link => {
            link.classList.remove("selectTab")
        })

        this.element.classList.add('selectTab')
        this.tabItems.forEach(item => {
            item.select();
    })
}
}

class TabItem {
    constructor(element) {
      this.element = element;
    }
  
    select() {
      const items = document.querySelectorAll('.h');
      items.forEach( item => {
          if (this.element.nodeName === item.nodeName) {
            item.classList.remove('selectItem');
          }
      })
      this.element.classList.add('selectItem');
    }
  }

let links = document.querySelectorAll(".tabLink") 

links = Array.from(links).map( link => new TabLink(link));
links[0].select()
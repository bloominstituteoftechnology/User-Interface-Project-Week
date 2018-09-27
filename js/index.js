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
        this.item = document.querySelector(`.tabItem[data-tab="${this.data}"]`);
        this.tabItem = new TabItem(this.item);

        this.element.addEventListener('click', () => {
            this.select();
        });

    };

    select() {
        const links = document.querySelectorAll('tabLink')
        links.forEach(link=> {
            link.classList.remove("selectTab")
        })

        this.element.classList.add('selectTab')
        this.tabItem.select();
    }
}

class TabItem {
    constructor(element) {
      this.element = element;
    }
  
    select() {
      const items = document.querySelectorAll('.tabItem');
      items.forEach( item => {
        item.classList.remove('selectItem');
      })
      this.element.classList.add('selectItem');
    }
  }

let links = document.querySelectorAll(".tabLink") 

links = Array.from(links).map( link => new TabLink(link));
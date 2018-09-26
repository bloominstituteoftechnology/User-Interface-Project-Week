class TabLink {
  constructor(element) {
    this.element = element;

    this.data = this.element.dataset.tab;

    this.item = document.querySelector(`.tabs-item[data-tab='${this.data}']`);

    this.tabItem = new TabItem(this.item);

    this.element.addEventListener('click', ()=> {
      this.select();
    });
  };

  select() {
    const links = document.querySelectorAll('.servicesButtons__btn');

    // so as to distinguish all links as non-selected
    links.forEach(link => {
      link.classList.remove('servicesButtons__btn--selected')
    });

    // except for this one
    this.element.classList.add('servicesButtons__btn--selected');

    // since you clicked on this one, execute the select method
    this.tabItem.select();
  }
}

class TabItem {
  constructor(element) {
    this.element = element;
  }

  select() {
    const items = document.querySelectorAll('.tabs-item');

    items.forEach(item => {
      // item.classList.remove('servicesButtons__btn--selected');
      item.classList.add('servicesFocusHide');
    })

    // this.element.classList.add('servicesButtons__btn--selected');
    this.element.classList.remove('servicesFocusHide');
  }
}



// PHASE ONE, in which we grab the buttons and array'ize them
// grab tabs

// let links = document.querySelectorAll('.tabs-link');
let links = document.querySelectorAll('.servicesButtons__btn');

// map domtokens into an array
links = Array.from(links).map(link => new TabLink(link));

links[0].select();


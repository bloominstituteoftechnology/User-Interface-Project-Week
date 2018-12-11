




class TabLink {
  constructor(element) {
    this.element = element;
    this.data = this.element.dataset.tab;
    this.itemElement = document.querySelector(`.tabs-item[data-tab='${this.data}']`)
    this.tabItem = new TabItem(this.itemElement);

    // get links and item 
    this.links = document.querySelectorAll(".tabs-link");
    this.tabItems = document.querySelectorAll('.tabs-item');

    // add click event to all links
    this.element.addEventListener('click', () => this.select(this.links));
  };

  select(links) {
    console.log('selected');
    // Array.from(links).forEach(tab =>
    //   tab.classList.remove("tabs-link-selected")
    // );
    // this.element.classList.add("tabs-link-selected");
    // this.tabItem.select(this.tabItems);
  }
}



class TabItem {
  constructor(element) {
    this.element = element;
  }
  select(tabItems) {
    console.log('selected tab')
    //   // const tabItems = document.querySelectorAll('.tabs-item');
    //   tabItems.forEach(item => {
    //     item.classList.remove('tabs-item-selected')
    //   })
    //   this.element.classList.add('tabs-item-selected')
    // }
  }
  let links = document.querySelectorAll('.tabs-link');
links.forEach((link) => new TabLink(link));












// JS goes here
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');
hamburger.addEventListener('click', function () {

  if (nav.classList.toggle('toggle')) {
    hamburger.src = "./img/nav-hamburger.png"
    window.style.overflow = hidden;
  } else {
    hamburger.src = "./img/nav-hamburger-close.png"
  }
})

class TabButton {
  constructor(props) {
    this.props = props;
    this.tabData = this.props.dataset.tab;
    this.tabElement = document.querySelector(`.bottom-section[data-tab='${this.tabData}']`);
    this.tabContent = new TabContent(this.tabElement);
    this.props.addEventListener("click", () => {
      this.select(event);
    });
  }
  select() {
    const links = document.querySelectorAll(".menu-button");
    Array.from(links).forEach(link => link.classList.remove("menu-button-selected"));
    this.props.classList.add("menu-button-selected");
    this.tabContent.select();
  }
}

class TabContent {
  constructor(item) {
    this.item = item;
  }
  select() {
    let items = document.querySelectorAll(".bottom-section");
    Array.from(items).forEach(items => items.classList.remove("bottom-section-text-selected"));
    this.item.classList.add("bottom-section-text-selected");
  }
}

let tabs = document.querySelectorAll(".menu-button");
tabs = Array.from(tabs).map(props => new TabButton(props));
console.log(tabs);
tabs[1].select();

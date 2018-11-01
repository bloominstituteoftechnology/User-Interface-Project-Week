class TabLink {
  constructor(tab) {
    this.tab = tab;
    this.data = this.tab.dataset.tab;
    this.contentItem = document.querySelector(
      `.content[data-tab='${this.data}']`
    );

    this.tabContent = new TabContent(this.contentItem);

    this.tab.addEventListener("click", event => {
      this.select();
    });
  }
  select() {
    const tabLinks = document.querySelectorAll(".services-tab");
    Array.from(tabLinks).forEach(link =>
      link.classList.remove("services-tab-selected")
    );
    this.tab.classList.add("services-tab-selected");
    this.tabContent.select();
  }
}

class TabContent {
  constructor(content) {
    this.content = content;
  }
  select() {
    const tabContent = document.querySelectorAll(".content");
    Array.from(tabContent).forEach(content =>
      content.classList.remove("content-selected")
    );
    this.content.classList.add("content-selected");
  }
}

let tabs = document.querySelectorAll(".services-tab");

tabs = Array.from(tabs).map(tab => new TabLink(tab));
tabs[0].select();

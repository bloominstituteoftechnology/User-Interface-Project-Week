class Tab {
  constructor(element) {
    this.element = element;
    this.tabData = this.element.dataset.tab;
    this.content = Array.from(document.querySelectorAll(".content")).find(
      item => item.dataset.tab === this.tabData
    );
    this.element.addEventListener("click", () => this.selectTab());
  }
  selectTab() {
    const tabs = document.querySelectorAll(".tab");
    tabs.forEach(tab => tab.classList.remove("active-tab"));
    this.element.classList.add("active-tab");
    const contents = document.querySelectorAll(".content");
    contents.forEach(content => (content.style.display = "none"));
    this.content.style.display = null;
  }
}
let tabs = document.querySelectorAll(".tab");
tabs = Array.from(tabs).map(tab => new Tab(tab));
tabs[0].selectTab();

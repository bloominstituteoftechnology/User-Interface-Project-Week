const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelectorAll(".menu-link");
const header = document.querySelector("header");
const logo = document.querySelector(".menu-bar p");

menuBtn.addEventListener("click", () => {
  header.classList.toggle("close");
  menu.forEach(link => link.classList.toggle("close"));
  menuBtn.classList.toggle("close");
  logo.classList.toggle("close");
});

// ==================== Services ==========================
class Tab {
  constructor(tab) {
    this.tab = tab;
    this.tabData = this.tab.dataset.tab;
    this.tabContent = document.querySelectorAll(
      `.tab-items[data-tab="${this.tabData}"]`
    );

    this.tab.addEventListener("click", () => this.selected());
    this.tabContent = Array.from(this.tabContent).map(
      content => new TabContent(content)
    );

    if (this.tabData === "1") {
      this.tab.classList.add("active-tab");
    }
  }

  selected() {
    const tabs = document.querySelectorAll(".tab");

    tabs.forEach(tab => tab.classList.remove("active-tab"));

    const content = document.querySelectorAll(".tab-items");

    content.forEach(content => (content.style.display = "none"));

    this.tab.classList.add("active-tab");

    this.tabContent.forEach(content => content.toggleContent());
  }
}

class TabContent {
  constructor(tabContent) {
    this.tabContent = tabContent;

    if (this.tabContent.dataset.tab === "1") {
      this.tabContent.style.display = "flex";
    }
  }
  toggleContent() {
    this.tabContent.style.display = "flex";
  }
}

const tabs = document.querySelectorAll(".tab");
tabs.forEach(tab => new Tab(tab));

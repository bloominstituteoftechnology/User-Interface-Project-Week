const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuLinks = document.querySelectorAll(".menu-item");
const logo = document.querySelector(".menu-bar p");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("close");
  menuLinks.forEach(link => link.classList.toggle("close"));
  menu.classList.toggle("close");

  logo.classList.toggle("close");
});

menuLinks.forEach(link =>
  link.addEventListener("click", e => {
    e.target.style.transition = "rotateY(180deg)";
  })
);

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

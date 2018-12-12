const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelectorAll(".menu-link");
const header = document.querySelector("header");

menuBtn.addEventListener("click", () => {
  header.classList.toggle("close");
  menu.forEach(link => link.classList.toggle("close"));
  menuBtn.classList.toggle("close");
});

// ==================== Services ==========================
class Tab {
  constructor(tab) {
    this.tab = tab;
    this.tabData = this.tab.dataSet;
    console.log(this.tabData);
  }
}

const tabs = document.querySelectorAll(".tab").forEach(tab => new Tab(tab));

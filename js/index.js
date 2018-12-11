/* Open */

class Tabs {
  constructor(ele) {
    this.ele = ele;
    this.data = this.ele.dataset.tab;
    this.content = document.querySelector(
      `.tab-content[data-tab="${this.data}"]`
    );

    this.tabItem = new TabItem(this.content);

    this.ele.addEventListener("click", () => this.select());
  }

  select() {
    const links = document.querySelectorAll(".buttons button");
    //links.forEach(link => console.log(link));

    this.tabItem.select(this.content);
  }
}

class TabItem {
  constructor(ele) {
    this.ele = ele;
  }

  select() {
    const items = document.querySelectorAll(".tab-content");
    items.forEach(item => (item.style.display = "none"));
    this.ele.style.display = "flex";
  }
}

const overlay = document.querySelector(".overlay");

function on() {
  overlay.style.display = "block";
}

function off() {
  overlay.style.display = "none";
}

const tabs = document
  .querySelectorAll(".buttons button")
  .forEach(btn => new Tabs(btn));

// JS goes here
const menuBtn = document.querySelector(".menu-btn");
const header = document.querySelector("header");

menuBtn.addEventListener("click", function(event) {
  event.stopPropagation();
  header.classList.toggle("expanded");
});

// 3. Constructor class
class TabLink {
  constructor(tab) {
    this.tab = tab;
    this.linkData = this.tab.dataset.tab;
    //  console.log(tab);
    this.tabContent = document.querySelector(
      `.tab__content[data-tab='${this.linkData}']`
    );

    this.tabItem = new Card(this.tabContent);
    this.tab.addEventListener("click", event => this.selectTab(event));
    //  console.log(this.tabContent);
    console.log(this.tabItem);
  }

  selectTab() {
    const tabs = document.querySelectorAll(".tab");
    Array.from(tabs).forEach(tab => tab.classList.remove("active-tab"));
    this.tab.classList.add("active-tab");
    console.log(this.tabItem);
    this.tabItem.selectCard();
  }
}

class Card {
  constructor(card) {
    this.card = card;
  }

  selectCard() {
    const cards = document.querySelectorAll(".tab__content");
    Array.from(cards).forEach(card => card.classList.remove("active"));
    this.card.classList.add("active");
    //  console.log("display null");
  }
}

// 1. Grab elements
let tabs = document.querySelectorAll(".tab");
// 2. Mount
tabs = Array.from(tabs).map(tab => new TabLink(tab));

tabs[1].selectTab();

// tabs components
class ServicesTabs {
  constructor(element) {
    this.element = element;
    this.tabData = this.element.dataset.tab;
    this.tab = document.querySelectorAll(`.card[data-tab=${this.tabData}]`);
    this.tab = Array.from(this.tab).map(card => new ServicesCard(card));
    this.element.addEventListener("click", () => {
      this.selectTab();
    });
  }
  selectTab() {
    const tabs = document.querySelectorAll(".tab");
    tabs.forEach(tab => {
      tab.classList.remove("active-tab");
    });

    this.element.classList.add("active-tab");

    const cards = document.querySelectorAll(".card");
    cards.forEach(card => {
      card.style.display = "none";
    });

    this.tab.forEach(card => {
      card.selectCard();
    });
  }
}

class ServicesCard {
  constructor(element) {
    this.element = element;
  }
  selectCard() {
    this.element.style.display = null;
  }
}

let tabs = document.querySelectorAll(".tab");
tabs = Array.from(tabs).map(tab => new ServicesTabs(tab));

tabs[0].selectTab();

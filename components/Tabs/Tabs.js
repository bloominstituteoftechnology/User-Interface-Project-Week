class Tab {
  constructor(element) {
    this.element = element;
    this.data = element.dataset.tab;
    this.tabItem = document.querySelector(`.tab-item[data-tab="${this.data}"]`);
    this.tabItem = new TabItem(this.tabItem);
    console.log(this.tabItem);

    this.element.addEventListener("click", event => this.selectTab());
  }
  selectTab() {
    //Remove active class from all tab links
    const tabLinks = document.querySelectorAll(".tab");
    tabLinks.forEach(item => item.classList.remove("active"));

    //Add active class to this tab
    this.element.classList.toggle("active");

    //Remove tab-item-active class from all tab items
    const tabItems = document.querySelectorAll(".tab-item");
    tabItems.forEach(item => item.classList.remove("tab-item-active"));
    console.log("removed all tab item active class");

    //Call Tab Item select() method
    this.tabItem.select();

    //Prevent from refreshing the page
    event.preventDefault();
  }
}

class TabItem {
  constructor(element) {
    this.element = element;
  }

  select() {
    this.element.classList.toggle("tab-item-active");
    console.log(this.element + "was clicked");
  }
}

let tabs = document.querySelectorAll(".tab");

tabs = Array.from(tabs).map(item => new Tab(item));

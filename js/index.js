// JS goes here

// nav constructor and nav toggle function
class Menu {
  constructor(menuName, menuButtonName) {
    this.menu = document.querySelector(menuName);
    this.menuButton = document.querySelector(menuButtonName);
    this.menuButton.addEventListener("click", () => this.toggleMenu());
    this.isOpen = false;
  }

  toggleMenu() {
    this.menu.classList.toggle("menu-open");
    this.menu.parentElement.classList.toggle("nav-opactiy");
    if (this.isOpen) {
      this.menuButton.src = "img/nav-hamburger.png";
      this.isOpen = false;
    } else {
      this.menuButton.src = "img/nav-hamburger-close.png";
      this.isOpen = true;
    }

  }
}

// tab constructor
class Tab {
  constructor(tab) {
    this.tab = tab;
    this.tabContent = document.querySelector(`.tab-content[data-tab="${this.tab.dataset.tab}"]`);
  }

  setActive(active) {
    if (active) {
      this.tab.classList.add('active');
      this.tabContent.classList.add('active');
    } else {
      this.tab.classList.remove('active');
      this.tabContent.classList.remove('active');
    }
  }
}

// tab navigator
class TabNavigator {
  constructor(tabNavigatorName) {
    this.tabNavigator = document.querySelector(tabNavigatorName);
    this.tabs = this.tabNavigator.querySelectorAll('.tab');
    this.tabs = Array.from(this.tabs).map(tab => new Tab(tab));
    this.tabs.forEach(tab => tab.tab.addEventListener('click', element => this.select(element)));
  }

  select(element) {
    this.tabs.forEach(tab => {
      if (tab.tab.dataset.tab === element.target.dataset.tab) tab.setActive(true);
      else tab.setActive(false);
    });
  }
}

// creates the navigation menu and the tab navigation
const menu = new Menu(".menu", ".menu-button");

if (page === "services") {
  const tabNavigator = new TabNavigator(".tab-navigator");
}

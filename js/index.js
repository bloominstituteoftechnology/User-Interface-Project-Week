/* menu */
class Menu {
  constructor(menuName, menuButtonName) {
    this.menu = document.querySelector('.' + menuName);
    this.menuButton = document.querySelector('.' + menuButtonName);
    this.menuButton.addEventListener("click", () => { this.toggleMenu() });
    this.isOpen = false;
  }

  toggleMenu() {
    this.menu.classList.toggle("menu--open");
    this.menu.parentElement.classList.toggle("partial-transparent");
    if (this.isOpen) {
      this.menuButton.src = "img/nav-hamburger.png";
      this.isOpen = false;
    } else {
      this.menuButton.src = "img/nav-hamburger-close.png";
      this.isOpen = true;
    }

  }
}

/* Tab */
class Tab {
  constructor(tab) {
    this.tab = tab;
    this.tabContent = document.querySelector(`.tab-content[data-tab="${ this.tab.dataset.tab }"]`);
  }

  setActive(active) {
    active ? this.tab.classList.add('active') : this.tab.classList.remove('active');
    active ? this.tabContent.classList.add('active') : this.tabContent.classList.remove('active');
  }
}

/* Tab Navigator */
class TabNavigator {
  constructor(tabNavigatorName) {
    this.tabNavigator = document.querySelector('.' + tabNavigatorName);
    this.tabs = this.tabNavigator.querySelectorAll('.tab');
    this.tabs = Array.from(this.tabs).map(tab => new Tab(tab));
    // this.tabContents = Array.from(document.querySelectorAll('.tab-content'));
    this.tabs.forEach((tab) => { tab.tab.addEventListener('click', (e) => { this.select(e) } )});
  }

  select(e) {
    this.tabs.forEach(tab => {
      if (tab.tab.dataset.tab === e.target.dataset.tab) tab.setActive(true);
      else tab.setActive(false);
    });
  }
}

/* Create menu and tab navigator */
const menu = new Menu("menu", "menu-button");
if (page === "services") {
  const tabNavigator = new TabNavigator("tab-navigator");
}
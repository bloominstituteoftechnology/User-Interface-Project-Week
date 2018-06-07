(function (library) {

    library(window, document);

}

(function (window, document) {

  init();

  function init() {
    const navElement = document.querySelector('nav');
    const nav = new Navigation(navElement, window, document);
    nav.init();

    const headerElement = document.querySelector('header');
    const header = new Header(headerElement, window);
    header.init();

    const tabNavigatorElement = document.querySelector('.tab-navigator');
    const tabNavigator = new TabNavigator(tabNavigatorElement);
    tabNavigator.init();
  }

}));
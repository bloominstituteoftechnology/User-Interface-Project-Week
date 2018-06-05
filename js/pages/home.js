(function (library) {

    library(window, document);

}

(function (window, document) {

  init();

  function init() {
    const navElement = document.querySelector('nav');
    const nav = new Navigation(navElement, window);
    nav.init();
  }

}));

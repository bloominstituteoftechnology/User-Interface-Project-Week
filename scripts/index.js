const navToggleButton = {
  collapsed: true,
  element: document.querySelector('.nav-main-button'),
  openImage: 'img/nav-hamburger.png',
  closeImage: 'img/nav-hamburger-close.png',
};

const pageContents = document.querySelector('.container');
const nav = document.querySelector('nav');

// handles hamburger
navToggleButton.element.addEventListener('click', () => {
  nav.classList.toggle('collapsed');
  if (navToggleButton.collapsed === true) {
    navToggleButton.element.innerHTML = `<img src="${
      navToggleButton.closeImage
    }" alt="close button">`;
    navToggleButton.collapsed = false;
  } else {
    navToggleButton.element.innerHTML = `<img src="${
      navToggleButton.openImage
    }" alt="close button">`;
    navToggleButton.collapsed = true;
  }
});

// Handles Scroll Logic
(function scrollLogic() {
  let last_known_scroll_position = 0;
  let ticking = false;

  function updateNavColor(scroll_pos) {
    if (scroll_pos === 0) {
      nav.classList.remove('scrolled');
    } else {
      nav.classList.add('scrolled');
    }
  }

  window.addEventListener('scroll', (e) => {
    last_known_scroll_position = window.scrollY;

    if (!ticking) {
      window.requestAnimationFrame(() => {
        updateNavColor(last_known_scroll_position);
        ticking = false;
      });

      ticking = true;
    }
  });
}());

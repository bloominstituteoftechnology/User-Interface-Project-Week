let navToggleButton = {
  collapsed: true,
  element: document.querySelector(".nav-main-button"),
  openImage: "img/nav-hamburger.png",
  closeImage: "img/nav-hamburger-close.png"
};

let pageContents = document.querySelector(".container");
let nav = document.querySelector("nav");

//handles hamburger
navToggleButton.element.addEventListener("click", () => {
  nav.classList.toggle("collapsed");
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

//Handles Scroll Logic
(function scrollLogic() {
  var last_known_scroll_position = 0;
  var ticking = false;

  function updateNavColor(scroll_pos) {
    if (scroll_pos === 0) {
      nav.classList.remove("scrolled");
    } else {
      nav.classList.add("scrolled");
    }
  }

  window.addEventListener("scroll", function handleScroll(e) {
    last_known_scroll_position = window.scrollY;

    if (!ticking) {
      window.requestAnimationFrame(function handleAnimation() {
        updateNavColor(last_known_scroll_position);
        ticking = false;
      });

      ticking = true;
    }
  });
})();

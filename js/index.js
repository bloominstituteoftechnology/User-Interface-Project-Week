// activate hamburger navitation
let overlay = document.querySelector('.overlay');
let closeBtn = document.querySelector('.close-btn');
let menuBtn = document.querySelector('.hambutton');

closeBtn.addEventListener('click', () => {
  overlay.style.display = 'none';
});

menuBtn.addEventListener('click', () => {
  overlay.style.display = 'block';
});

// activate onscroll nav bar color change
let navbar = document.querySelector('.navigation-container');
window.addEventListener('scroll', changeNavColor);

function changeNavColor() {
  navbar.style = 'background-color: #9DA7B1';
  navbar.style.opacity = '0.95';
}

/*
// turns off styles when stops scrolling
// Setup isScrolling variable
var isScrolling;

// Listen for scroll events
window.addEventListener(
  'scroll',
  () => {
    // Clear our timeout throughout the scroll
    window.clearTimeout(isScrolling);

    // Set a timeout to run after scrolling ends
    isScrolling = setTimeout(function() {
      // Run the callback
      navbar.style.opacity = 1;
      navbar.style = 'background-color: null';
    }, 66);
  },
  false,
);
*/

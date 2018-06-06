let hamburger = document.querySelector(".nav-main-button");
let pageContents = document.querySelector('.container');
let nav = document.querySelector('nav');


hamburger.addEventListener("click", () => {
    // pageContents.classList.toggle("hidden");
    nav.classList.toggle("collapsed");
});


function scrollLogic () {
    var last_known_scroll_position = 0;
    var ticking = false;

function updateNavColor(scroll_pos) {
  console.log(scroll_pos);
  if (scroll_pos === 0) {
      nav.classList.remove('scrolled');
  } else {
      nav.classList.add('scrolled');
  }
}

window.addEventListener('scroll', function handleScroll (e) {

  last_known_scroll_position = window.scrollY;

  if (!ticking) {

    window.requestAnimationFrame(function() {
      updateNavColor(last_known_scroll_position);
      ticking = false;
    });
     
    ticking = true;

  }
  
});
}

scrollLogic();